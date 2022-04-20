import { Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { CfnTopic } from '@aws-cdk/aws-sns';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer } from '../alarmer';

export class SnsServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnTopic) {
      const errors = ['NumberOfNotificationsFailed', 'NumberOfNotificationsFilteredOut-InvalidAttributes', 'NumberOfNotificationsFilteredOut-NoMessageAttributes', 'NumberOfNotificationsFailedToRedriveToDlq'];
      errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/SNS',
            metricName: e,
            dimensionsMap: {
              TopicName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }

  throttles(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

}