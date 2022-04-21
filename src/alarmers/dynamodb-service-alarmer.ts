import { Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnTable } from 'aws-cdk-lib/aws-dynamodb';
import { IConstruct } from 'constructs';
import { Alarmer, AlarmerProps } from '../alarmer';

export class DynamodbServiceAlarmer extends Alarmer {
  constructor(props: AlarmerProps) {
    super(props);
  }

  bestPractice(node: IConstruct): void {
    const sum_errors = ['UserErrors', 'ConditionalCheckFailedRequests'];
    if (node instanceof CfnTable) {
      sum_errors.forEach((e) =>{
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/DynamoDB',
            metricName: e,
            dimensionsMap: {
              TableName: node.ref,
            },
            statistic: 'sum',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }

  errors(node: IConstruct): void {
    const max_errors = ['ConditionalCheckFailedRequests', 'FailedToReplicateRecordCount', 'TransactionConflict'];
    const sum_errors = ['SystemErrors'];
    if (node instanceof CfnTable) {
      max_errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/DynamoDB',
            metricName: e,
            dimensionsMap: {
              TableName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
      sum_errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/DynamoDB',
            metricName: e,
            dimensionsMap: {
              TableName: node.ref,
            },
            statistic: 'sum',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }

  throttles(node: IConstruct): void {
    const max_throttles = ['OnlineIndexThrottleEvents', 'ThrottledPutRecordCount'];
    const sum_throttles = ['ReadThrottleEvents', 'ThrottledRequests', 'WriteThrottleEvents'];
    if (node instanceof CfnTable) {
      max_throttles.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/DynamoDB',
            metricName: e,
            dimensionsMap: {
              TableName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });

      sum_throttles.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/DynamoDB',
            metricName: e,
            dimensionsMap: {
              TableName: node.ref,
            },
            statistic: 'sum',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }
}