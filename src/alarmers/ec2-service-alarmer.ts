import { Stack } from 'aws-cdk-lib';
import { ComparisonOperator, Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnInstance } from 'aws-cdk-lib/aws-ec2';
import { IConstruct } from 'constructs';
import { Alarmer, AlarmerProps } from '../alarmer';


export class Ec2ServiceAlarmer extends Alarmer {
  private apiServerErrorsAlarmed: boolean;
  private apiThrottlesAlarms: boolean;

  constructor(props: AlarmerProps) {
    super(props);
    this.apiServerErrorsAlarmed = false;
    this.apiThrottlesAlarms = false;
  }

  bestPractice(node: IConstruct): void {
    if (node instanceof CfnInstance) {
      const metrics = ['CPUCreditBalance', 'EBSIOBalance', 'EBSByteBalance'];
      metrics.forEach((m) => {
        this.alarm(node, m+'-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/EC2',
            metricName: m,
            dimensionsMap: {
              InstanceId: node.ref,
            },
            statistic: 'max',
          }),
          threshold: 0,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
          comparisonOperator: ComparisonOperator.LESS_THAN_OR_EQUAL_TO_THRESHOLD,
        });
      });
    }
  }

  errors(node: IConstruct): void {
    this.logDebug('Entering Ec2ServiceAlarmer.errors');
    if (node instanceof CfnInstance) {
      if (!this.apiServerErrorsAlarmed) {
        this.alarm(node, 'Ec2ServerErrors'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/EC2/API',
            metricName: 'ServerErrors',
            dimensionsMap: {},
            statistic: 'max',
          }),
          threshold: 1,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });

        this.apiServerErrorsAlarmed = true;
        this.logInfo('Alarmed EC2 API ServerErrors');
      } else {
        this.logDebug('Already alarmed EC2 API ServerErrors.  Skipping additional request');
      }

      const instanceId = node.ref;
      // Status Check: Metric reports whether the instance has passed both the instance status check and the system status check in the last minute.
      // If instance fails either check, alarm is triggered
      this.alarm(node, 'StatusCheckFailed-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/EC2',
          metricName: 'StatusCheckFailed',
          dimensionsMap: {
            InstanceId: instanceId,
          },
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });

      this.logInfo('Alarmed EC2 Instance for Status Check');
    } else {
      this.logSilly('Skipping non-CfnInstance');
    }
    this.logDebug('Exiting Ec2ServiceAlarmer.errors');
  }

  throttles(node: IConstruct): void {
    this.logDebug('Entering Ec2ServiceAlarmer.throttles');

    if (node instanceof CfnInstance && !this.apiThrottlesAlarms) {
      this.apiThrottlesAlarms = true;
      this.alarm(node, 'Ec2RequestLimitExceeded-'+Stack.of(node).stackName, {
        metric: new Metric({
          namespace: 'AWS/EC2/API',
          metricName: 'RequestLimitExceeded',
          dimensionsMap: {},
          statistic: 'max',
        }),
        threshold: 1,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
      this.logInfo('Alarmed EC2 API RequestLimitExceeded');
    } else {
      this.logDebug('Already alarmed EC2 API RequestLimitExceeded.  Skipping additional request');
    }

    this.logDebug('Exiting Ec2ServiceAlarmer.throttles');
  }

}