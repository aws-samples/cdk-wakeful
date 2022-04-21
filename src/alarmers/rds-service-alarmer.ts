import { ComparisonOperator, Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnDBCluster, CfnDBInstance } from 'aws-cdk-lib/aws-rds';
import { IConstruct } from 'constructs';
import { Alarmer } from '../alarmer';

export class RdsServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnDBInstance) {
      this.alarm(node, 'FreeStroage-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/RDS',
          metricName: 'FreeStorageSpace',
          dimensionsMap: {
            DBInstanceIdentifier: node.ref,
          },
        }),
        threshold: 0,
        treatMissingData: TreatMissingData.NOT_BREACHING,
        evaluationPeriods: 1,
        comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
      });
    }
  }

  throttles(node: IConstruct): void {
    if (node instanceof CfnDBCluster) {
      this.alarm(node, 'EBSIOBalance-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/RDS',
          metricName: 'EBSIOBalance%',
          dimensionsMap: {
            DBClusterIdentifier: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 0,
        treatMissingData: TreatMissingData.NOT_BREACHING,
        evaluationPeriods: 1,
        comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
      });
    }
  }
}