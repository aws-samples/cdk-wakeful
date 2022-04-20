import { Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { CfnBucket } from '@aws-cdk/aws-s3';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer } from '../alarmer';

export class S3ServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

  errors(node: IConstruct): void {
    if ( node instanceof CfnBucket) {
      this.alarm(node, 'ServerSideErrors'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/S3',
          metricName: '5xxErrors',
          statistic: 'sum',
          dimensionsMap: {
            BucketName: node.ref,
          },
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
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