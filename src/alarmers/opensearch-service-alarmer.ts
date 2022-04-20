import { ComparisonOperator, Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { CfnDomain } from '@aws-cdk/aws-opensearchservice';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer } from '../alarmer';

export class OpensearchServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    if (node instanceof CfnDomain) {
      this.alarm(node, 'ClusterStatus.yellow-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ES',
          metricName: 'ClusterStatus.yellow',
          dimensionsMap: {
            DomainName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnDomain) {
      const max_errors = ['ClusterStatus.red', 'KMSKeyError', 'KMSKeyInaccessible'];
      max_errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/ES',
            metricName: e,
            dimensionsMap: {
              DomainName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });

      this.alarm(node, 'ServerErros-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ES',
          metricName: '5xx',
          dimensionsMap: {
            DomainName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });

      const max_lte_zero_errors = ['FreeStorageSpace', 'MasterReachableFromNode', 'OpenSearchDashboardsHealthyNode']; max_lte_zero_errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/ES',
            metricName: e,
            dimensionsMap: {
              DomainName: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 0,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
          comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
        });
      });

      this.alarm(node, 'KibanaReportingFailedRequestSysErrCount-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ES',
          metricName: 'KibanaReportingFailedRequestSysErrCount',
          dimensionsMap: {
            DomainName: node.ref,
          },
          statistic: 'sum',
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