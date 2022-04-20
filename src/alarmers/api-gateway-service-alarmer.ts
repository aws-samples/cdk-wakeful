import { CfnRestApi } from '@aws-cdk/aws-apigateway';
import { CfnApi } from '@aws-cdk/aws-apigatewayv2';
import { Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer, AlarmerProps } from '../alarmer';

export class ApiGatewayServiceAlarmer extends Alarmer {
  constructor(props: AlarmerProps) {
    super(props);
  }

  bestPractice(node: IConstruct): void {
    if (node instanceof CfnRestApi) {
      this.alarm(node, 'LatencyAlarm', {
        metric: new Metric({
          namespace: 'AWS/ApiGateway',
          metricName: 'Latency',
          statistic: 'p90',
          dimensionsMap: {
            ApiName: node.ref,
          },
        }),
        threshold: 2000,
        evaluationPeriods: 5,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnRestApi) {
      this.alarm(node, 'ServerSideErrors-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ApiGateway',
          metricName: '5XXError',
          dimensionsMap: {
            ApiName: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }

    if (node instanceof CfnApi) {
      this.alarm(node, 'ServerSideErrors-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ApiGateway',
          metricName: '5xx',
          dimensionsMap: {
            ApiId: node.ref,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }
  }

  throttles(node: IConstruct): void {
    const message = 'ApiGateway.Throttles: Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

}