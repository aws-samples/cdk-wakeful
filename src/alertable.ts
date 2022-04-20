import { Alarm } from '@aws-cdk/aws-cloudwatch';

export interface IAlertable {
  subscribeToAlarm(alarm: Alarm): void;
}