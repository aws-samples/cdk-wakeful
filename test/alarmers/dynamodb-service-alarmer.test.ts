import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { DynamodbServiceAlarmer } from '../../src/alarmers/dynamodb-service-alarmer';

class BestPracticeAspect implements IAspect {
  visit(node: IConstruct) {
    new DynamodbServiceAlarmer({}).bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  visit(node:IConstruct) {
    new DynamodbServiceAlarmer({}).errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  visit(node: IConstruct) {
    new DynamodbServiceAlarmer({}).throttles(node);
  }
}

function includeDDBTable(stack: Stack): void {
  new Table(stack, 'Table', {
    partitionKey: { name: 'id', type: AttributeType.STRING },
  });
}

describe('Amazon DynamoDB', () => {
  test('No Table Tests', () => {
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
    Aspects.of(stack).add(new BestPracticeAspect());
    includeDDBTable(stack);

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'UserErrors',
      ComparisonOperator: 'GreaterThanOrEqualToThreshold',
      Statistic: 'Sum',
    });
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: 'ConditionalCheckFailedRequests',
      ComparisonOperator: 'GreaterThanOrEqualToThreshold',
      Statistic: 'Sum',
    });
  });
});