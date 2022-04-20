import { Alarm, AlarmActionConfig, CfnAlarm, IAlarm, IAlarmAction } from '@aws-cdk/aws-cloudwatch';
import { Construct, Stack } from '@aws-cdk/core';
import { IAlertable } from '../alertable';

export interface IncidentManagerAlerterProps {
  readonly responsePlanArn: string;
}

class IncidentManagerAlarmAction implements IAlarmAction {
  private readonly responsePlanArn: string;

  constructor(responsePlanArn: string) {
    this.responsePlanArn = responsePlanArn;
  }

  bind(scope: Construct, alarm: IAlarm): AlarmActionConfig {
    if (alarm.node instanceof CfnAlarm && alarm.node.alarmActions != undefined) {
      for (let i = 0, len = alarm.node.alarmActions.length; i < len; i++) {
        if (this.responsePlanArn == alarm.node.alarmActions[i]) {
          alarm.node.alarmActions?.splice(i, 1);
          break;
        }
      }
    }
    if (alarm.stack != Stack.of(scope)) {
      throw Error('Something odd happend');
    }
    return {
      alarmActionArn: this.responsePlanArn,
    };
  }
}

export class IncidentManagerAlerter implements IAlertable {
  private readonly action: IncidentManagerAlarmAction;

  constructor(props : IncidentManagerAlerterProps) {
    this.action = new IncidentManagerAlarmAction(props.responsePlanArn);
  }

  subscribeToAlarm(alarm: Alarm): void {
    alarm.addAlarmAction(this.action);
  }

}