import { Metric, TreatMissingData } from '@aws-cdk/aws-cloudwatch';
import { CfnStateMachine } from '@aws-cdk/aws-stepfunctions';
import { IConstruct } from '@aws-cdk/core';
import { Alarmer } from '../alarmer';

export class StepFunctionsServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    const message = 'Skipping ' + node.node.id;
    if (this.logIgnores) {
      this.logInfo(message);
    } else {
      this.logSilly(message);
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnStateMachine) {
      const errors = ['ExecutionsFailed', 'ExecutionsTimedOut', 'ActivitiesFailed', 'ActivitiesTimedOut', 'LambdaFunctionsFailed',
        'LambdaFunctionsTimedOut', 'ServiceIntegrationsFailed', 'ServiceIntegrationsTimedOut'];

      errors.forEach((e) => {
        this.alarm(node, e+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/States',
            metricName: e,
            statistic: 'sum',
            dimensionsMap: {
              StateMachineArn: node.ref,
            },
          }),
          evaluationPeriods: 1,
          threshold: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }

  throttles(node: IConstruct): void {
    if (node instanceof CfnStateMachine) {
      const throttles = ['ExecutionThrottled', 'ThrottledEvents'];
      throttles.forEach((t) => {
        this.alarm(node, t+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/States',
            metricName: t,
            statistic: 'sum',
            dimensionsMap: {
              StateMachineArn: node.ref,
            },
          }),
          evaluationPeriods: 1,
          threshold: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      });
    }
  }
}