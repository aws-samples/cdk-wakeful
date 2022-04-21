import { Alarm } from 'aws-cdk-lib/aws-cloudwatch';

export interface IAlertable {
  subscribeToAlarm(alarm: Alarm): void;
}