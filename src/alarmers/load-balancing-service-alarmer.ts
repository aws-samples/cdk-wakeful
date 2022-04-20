import { Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { CfnLoadBalancer } from '@aws-cdk/aws-elasticloadbalancing';
import { CfnLoadBalancer as CfnLoadBalancerV2 } from '@aws-cdk/aws-elasticloadbalancingv2';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer } from '../alarmer';

export class LoadBalancingServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

  errors(node: IConstruct): void {
    this.logDebug('Entering LambdaServiceAlarmer.errors');
    if ( node instanceof CfnLoadBalancer) {
      const errors = ['HTTPCode_Backend_5XX', 'BackendConnectionErrors', 'HTTPCode_ELB_5XX'];
      errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/ELB',
            metricName: e,
            dimensionsMap: {
              LoadBalancerName: node.ref,
            },
            statistic: 'sum',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }

    if (node instanceof CfnLoadBalancerV2 ) {
      let loadBalancer = node as CfnLoadBalancerV2;
      if (loadBalancer.type == 'application') {
        const errors = ['HTTPCode_ELB_5XX_Count', 'RejectedConnectionCount', 'HTTPCode_Target_5XX_Count', 'LambdaUserError'];
        errors.forEach((e) => {
          this.alarm(node, e + '-' + this.randomSeed(), {
            metric: new Metric({
              namespace: 'AWS/ApplicationELB',
              metricName: e,
              dimensionsMap: {
                LoadBalancer: node.ref,
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

    this.logDebug('Exiting LambdaServiceAlarmer.errors');
  }

  throttles(node: IConstruct): void {
    this.logDebug('Entering LambdaServiceAlarmer.throttles');
    if ( node instanceof CfnLoadBalancer) {
      this.alarm(node, 'SpilloverCount-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ELB',
          metricName: 'SpilloverCount',
          dimensionsMap: {
            LoadBalancerName: node.ref,
          },
          statistic: 'sum',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }

    this.logDebug('Exiting LambdaServiceAlarmer.throttles');
  }

}