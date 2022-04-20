import { Template } from '@aws-cdk/assertions';
import { InstanceClass, InstanceSize, InstanceType, SubnetType, Vpc } from '@aws-cdk/aws-ec2';
import { AuroraMysqlEngineVersion, Credentials, DatabaseCluster, DatabaseClusterEngine } from '@aws-cdk/aws-rds';
import { Topic } from '@aws-cdk/aws-sns';
import { Aspects, IAspect, IConstruct, Stack } from '@aws-cdk/core';
import { RdsServiceAlarmer } from '../../src/alarmers/rds-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: RdsServiceAlarmer = new RdsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: RdsServiceAlarmer = new RdsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: RdsServiceAlarmer = new RdsServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeDatabase(stack: Stack):void {
  const vpc = new Vpc(stack, 'Vpc');
  new DatabaseCluster(stack, 'Database', {
    instances: 1,
    engine: DatabaseClusterEngine.auroraMysql({ version: AuroraMysqlEngineVersion.VER_2_08_1 }),
    credentials: Credentials.fromGeneratedSecret('clusteradmin'), // Optional - will default to 'admin' username and generated password
    instanceProps: {
      // optional , defaults to t3.medium
      instanceType: InstanceType.of(InstanceClass.BURSTABLE2, InstanceSize.SMALL),
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_WITH_NAT,
      },
      vpc,
    },
  });
}

describe('RDS', () => {
  test('No Database Tests', () => {
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
    includeDatabase(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Errors', () => {
    const stack = new Stack();
    includeDatabase(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeDatabase(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });
});