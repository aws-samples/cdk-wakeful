import { Template } from '@aws-cdk/assertions';
import * as lambda from '@aws-cdk/aws-lambda';
import { Topic } from '@aws-cdk/aws-sns';
import { Aspects, IAspect, IConstruct, Stack } from '@aws-cdk/core';
import { LambdaServiceAlarmer } from '../../src/alarmers/lambda-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: LambdaServiceAlarmer = new LambdaServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: LambdaServiceAlarmer = new LambdaServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: LambdaServiceAlarmer = new LambdaServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeFunction(stack: Stack):void {
  new lambda.Function(stack, 'MyFunction', {
    runtime: lambda.Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: lambda.Code.fromInline('' +
      'def handler(event, context):' +
      ' print(event)'),
  });
}

describe('Lambda', () => {
  test('No Function Tests', () => {
    const bestPractice = new Stack();
    const errors = new Stack();
    const throttles = new Stack();
    Aspects.of(bestPractice).add(new BestPracticeAspect());
    Aspects.of(errors).add(new ErrorsAspect());
    Aspects.of(throttles).add(new ThrottlesAspect());
    new Topic(bestPractice, 'BestPractice');
    new Topic(errors, 'Errors');
    new Topic(throttles, 'Throttles');

    const bestPracticeTemplate = Template.fromStack(bestPractice);
    bestPracticeTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const errorsTemplate = Template.fromStack(errors);
    errorsTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const throttlesTemplate = Template.fromStack(throttles);
    throttlesTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Best Practices', () => {
    const stack = new Stack();
    includeFunction(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });

  test('Errors', () => {
    const stack = new Stack();
    includeFunction(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 4);
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeFunction(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });
});