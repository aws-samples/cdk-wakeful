import { Alarm } from '@aws-cdk/aws-cloudwatch';
import { IAlertable } from '../alertable';
import { Logger, LogLevel } from '../logger';


export class NoOpAlerter implements IAlertable {
  private logger:Logger;
  constructor() {
    this.logger = new Logger(LogLevel.WARN);
  }

  subscribeToAlarm(alarm: Alarm):void {
    this.logger.warn('NoOpAlerter attached to ' + alarm.node.id + '. This means the Alarm will trigger and nothing will be sent or notified.');
  }
}