import { Template } from '@aws-cdk/assertions';
import * as lambda from '@aws-cdk/aws-lambda';
import { Topic } from '@aws-cdk/aws-sns';
import * as sfn from '@aws-cdk/aws-stepfunctions';
import * as tasks from '@aws-cdk/aws-stepfunctions-tasks';
import { Aspects, Duration, IAspect, IConstruct, Stack } from '@aws-cdk/core';
import { StepFunctionsServiceAlarmer } from '../../src/alarmers/step-functions-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: StepFunctionsServiceAlarmer = new StepFunctionsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: StepFunctionsServiceAlarmer = new StepFunctionsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: StepFunctionsServiceAlarmer = new StepFunctionsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeFunction(stack: Stack):void {
  const submitLambda: lambda.Function = new lambda.Function(stack, 'submitLambda', {
    runtime: lambda.Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: lambda.Code.fromInline('' +
      'def handler(event, context):' +
      ' print(event)'),
  });
  const getStatusLambda: lambda.Function = new lambda.Function(stack, 'statusLambda', {
    runtime: lambda.Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: lambda.Code.fromInline('' +
      'def handler(event, context):' +
      ' print(event)'),
  });
  const submitJob = new tasks.LambdaInvoke(stack, 'Submit Job', {
    lambdaFunction: submitLambda,
    // Lambda's result is in the attribute `Payload`
    outputPath: '$.Payload',
  });

  const waitX = new sfn.Wait(stack, 'Wait X Seconds', {
    time: sfn.WaitTime.secondsPath('$.waitSeconds'),
  });

  const getStatus = new tasks.LambdaInvoke(stack, 'Get Job Status', {
    lambdaFunction: getStatusLambda,
    inputPath: '$.guid',
    outputPath: '$.Payload',
  });

  const jobFailed = new sfn.Fail(stack, 'Job Failed', {
    cause: 'AWS Batch Job Failed',
    error: 'DescribeJob returned FAILED',
  });

  const finalStatus = new tasks.LambdaInvoke(stack, 'Get Final Job Status', {
    lambdaFunction: getStatusLambda,
    // Use "guid" field as input
    inputPath: '$.guid',
    outputPath: '$.Payload',
  });

  const definition = submitJob
    .next(waitX)
    .next(getStatus)
    .next(new sfn.Choice(stack, 'Job Complete?')
      // Look at the "status" field
      .when(sfn.Condition.stringEquals('$.status', 'FAILED'), jobFailed)
      .when(sfn.Condition.stringEquals('$.status', 'SUCCEEDED'), finalStatus)
      .otherwise(waitX));

  new sfn.StateMachine(stack, 'StateMachine', {
    definition,
    timeout: Duration.minutes(5),
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
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Errors', () => {
    const stack = new Stack();
    includeFunction(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 8);
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeFunction(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 2);
  });
});