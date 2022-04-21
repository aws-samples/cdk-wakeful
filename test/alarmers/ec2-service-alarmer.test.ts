import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AmazonLinuxImage, Instance, InstanceType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { Ec2ServiceAlarmer } from '../../src/alarmers/ec2-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: Ec2ServiceAlarmer = new Ec2ServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: Ec2ServiceAlarmer = new Ec2ServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: Ec2ServiceAlarmer = new Ec2ServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeEc2Instance(stack: Stack, constructId='Instance') : void {
  const vpc = new Vpc(stack, 'Vpc-'+constructId);
  new Instance(stack, constructId, {
    vpc: vpc,
    machineImage: new AmazonLinuxImage(),
    instanceType: new InstanceType('t2.micro'),
  });
}

describe('Amazon EC2', () => {
  test('No Instance Tests', () => {
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

  test('Best Practices Tests', () =>{
    const stack = new Stack();
    includeEc2Instance(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 3);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 0,
      TreatMissingData: 'notBreaching',
      MetricName: 'CPUCreditBalance',
      Statistic: 'Maximum',
    });

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 0,
      TreatMissingData: 'notBreaching',
      MetricName: 'EBSIOBalance',
      Statistic: 'Maximum',
    });

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 0,
      TreatMissingData: 'notBreaching',
      MetricName: 'EBSByteBalance',
      Statistic: 'Maximum',
    });
  });

  test('Errors Tests One Instance', () => {
    const stack = new Stack();
    includeEc2Instance(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 2);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'ServerErrors',
      Statistic: 'Maximum',
    });
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'StatusCheckFailed',
      Statistic: 'Maximum',
    });
  });

  test('Errors Tests Two Instances', () => {
    const stack = new Stack();
    includeEc2Instance(stack);
    includeEc2Instance(stack, 'Instance2');
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 3);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'ServerErrors',
      Statistic: 'Maximum',
    });
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'StatusCheckFailed',
      Statistic: 'Maximum',
    });
  });

  test('Throttle Tests One Instance', () => {
    const stack = new Stack();
    includeEc2Instance(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'RequestLimitExceeded',
      Statistic: 'Maximum',
    });
  });

  test('Throttle Tests Two Instances', () => {
    const stack = new Stack();
    includeEc2Instance(stack);
    includeEc2Instance(stack, 'Instance2');
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'RequestLimitExceeded',
      Statistic: 'Maximum',
    });
  });
});