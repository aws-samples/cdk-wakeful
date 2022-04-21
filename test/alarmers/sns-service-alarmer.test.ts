import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { SnsServiceAlarmer } from '../../src/alarmers/sns-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: SnsServiceAlarmer = new SnsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: SnsServiceAlarmer = new SnsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: SnsServiceAlarmer = new SnsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeTopic(stack: Stack):void {
  new Topic(stack, 'Topic');
}

describe('Sns', () => {
  test('No Function Tests', () => {
    const bestPractice = new Stack();
    const errors = new Stack();
    const throttles = new Stack();
    Aspects.of(bestPractice).add(new BestPracticeAspect());
    Aspects.of(errors).add(new ErrorsAspect());
    Aspects.of(throttles).add(new ThrottlesAspect());
    new Vpc(bestPractice, 'BestPractice');
    new Vpc(errors, 'Errors');
    new Vpc(throttles, 'Throttles');

    const bestPracticeTemplate = Template.fromStack(bestPractice);
    bestPracticeTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const errorsTemplate = Template.fromStack(errors);
    errorsTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const throttlesTemplate = Template.fromStack(throttles);
    throttlesTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Best Practices', () => {
    const stack = new Stack();
    includeTopic(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Errors', () => {
    const stack = new Stack();
    includeTopic(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 4);
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeTopic(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });
});