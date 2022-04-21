import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { CfnCacheCluster, CfnSubnetGroup } from 'aws-cdk-lib/aws-elasticache';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { ElasticacheServiceAlarmer } from '../../src/alarmers/elasticache-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: ElasticacheServiceAlarmer = new ElasticacheServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: ElasticacheServiceAlarmer = new ElasticacheServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: ElasticacheServiceAlarmer = new ElasticacheServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeRedisElastiCacheCluster(stack: Stack, constructId='Cluster'): void {
  const vpc = new Vpc(stack, 'Vpc'+constructId);
  const securityGroup = new SecurityGroup(stack, 'SecurityGroup'+constructId, {
    vpc: vpc,
  });
  const subnets = new CfnSubnetGroup(stack, 'Subnets'+constructId, {
    description: 'Subnets',
    subnetIds: vpc.privateSubnets.map((value) => { return value.subnetId; }),
  });
  new CfnCacheCluster(stack, 'Cluster'+constructId, {
    autoMinorVersionUpgrade: true,
    engine: 'redis',
    cacheNodeType: 'cache.m5.large',
    numCacheNodes: 1,
    cacheParameterGroupName: subnets.ref,
    vpcSecurityGroupIds: [securityGroup.securityGroupId],
  });
}

describe('Amazon ElastiCache', () => {
  test('No Cluster Tests', () => {
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

  test('Best Practices Tests', () => {
    const stack = new Stack();
    includeRedisElastiCacheCluster(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 2);
  });

  test('Errors Tests', () => {
    const stack = new Stack();
    includeRedisElastiCacheCluster(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 100,
      TreatMissingData: 'notBreaching',
      MetricName: 'DatabaseMemoryUsagePercentage',
      Statistic: 'Maximum',
    });
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeRedisElastiCacheCluster(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });
});