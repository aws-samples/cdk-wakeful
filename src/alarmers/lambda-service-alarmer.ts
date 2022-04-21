import { Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnFunction } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';
import { Alarmer } from '../alarmer';

export class LambdaServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    if (node instanceof CfnFunction) {
      const maxDuration = 1000 * 60 * 15; // Maximum Duration for a lambda function is 15 minutes.
      const threshold = maxDuration * 0.99; // 14:51 (mm:ss)
      this.alarm(node, 'BestPracticeDuration-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/Lambda',
          metricName: 'Duration',
          dimensionsMap: {
            FunctionName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: threshold,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }
  }

  errors(node: IConstruct): void {
    this.logDebug('Entering LambdaServiceAlarmer.errors');
    if (node instanceof CfnFunction) {
      const errors = ['Errors', 'DeadLetterErrors', 'DestinationDeliveryFailures'];
      errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/Lambda',
            metricName: e,
            dimensionsMap: {
              FunctionName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
        this.logInfo('Alarmed Lambda Function for '+e);
      });
      const lambdaMaxDuration = 15 * 60 * 1000;
      this.alarm(node, 'Duration-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/Lambda',
          metricName: 'Duration',
          dimensionsMap: {
            FunctionName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: lambdaMaxDuration,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    } else {
      this.logSilly('Skipping non-CfnFunction');
    }

    this.logDebug('Exiting LambdaServiceAlarmer.errors');
  }

  throttles(node: IConstruct): void {
    this.logDebug('Entering LambdaServiceAlarmer.throttles');
    if (node instanceof CfnFunction) {
      this.alarm(node, 'Throttles-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/Lambda',
          metricName: 'Throttles',
          dimensionsMap: {
            FunctionName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    } else {
      this.logSilly('Skipping non-CfnFunction');
    }
    this.logDebug('Exiting LambdaServiceAlarmer.throttles');
  }

}