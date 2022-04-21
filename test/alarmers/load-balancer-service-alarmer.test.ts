import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { AmazonLinuxImage, InstanceClass, InstanceSize, InstanceType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { LoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancing';
import { ApplicationLoadBalancer } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { LoadBalancingServiceAlarmer } from '../../src/alarmers/load-balancing-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: LoadBalancingServiceAlarmer = new LoadBalancingServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: LoadBalancingServiceAlarmer = new LoadBalancingServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: LoadBalancingServiceAlarmer = new LoadBalancingServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeLoadBalancerV1(stack: Stack, vpc: Vpc):void {
  const autoscalingGroup = new AutoScalingGroup(stack, 'ASG', {
    vpc,
    instanceType: InstanceType.of(InstanceClass.BURSTABLE2, InstanceSize.MICRO),
    machineImage: new AmazonLinuxImage(),
  });
  const lb = new LoadBalancer(stack, 'LB', {
    vpc,
    internetFacing: true,
    healthCheck: {
      port: 80,
    },
  });
  lb.addTarget(autoscalingGroup);
  lb.addListener({
    externalPort: 80,
  });
}

function includeLoadBalancerV2(stack: Stack, vpc: Vpc):void {
  const autoscalingGroup = new AutoScalingGroup(stack, 'ASG2', {
    vpc,
    instanceType: InstanceType.of(InstanceClass.BURSTABLE2, InstanceSize.MICRO),
    machineImage: new AmazonLinuxImage(),
  });
  const lb = new ApplicationLoadBalancer(stack, 'LB2', {
    vpc,
    internetFacing: true,
  });
  const listener = lb.addListener('Listener', {
    port: 80,
    open: true,
  });
  listener.addTargets('ApplicationFleet', {
    port: 8080,
    targets: [autoscalingGroup],
  });
}

describe('Load Balancer Tests', () => {
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
    const vpc = new Vpc(stack, 'Vpc');
    includeLoadBalancerV1(stack, vpc);
    includeLoadBalancerV2(stack, vpc);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Errors V1', () => {
    const stack = new Stack();
    const vpc = new Vpc(stack, 'Vpc');
    includeLoadBalancerV1(stack, vpc);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 3);
  });

  test('Errors V2', () => {
    const stack = new Stack();
    const vpc = new Vpc(stack, 'Vpc');
    includeLoadBalancerV2(stack, vpc);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 4);
  });

  test('Throttles', () => {
    const stack = new Stack();
    const vpc = new Vpc(stack, 'Vpc');
    includeLoadBalancerV1(stack, vpc);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });
});