import { Stack } from 'aws-cdk-lib';
import { Alarm } from 'aws-cdk-lib/aws-cloudwatch';
import { SnsAction } from 'aws-cdk-lib/aws-cloudwatch-actions';
import { Key } from 'aws-cdk-lib/aws-kms';
import { ITopic, Topic } from 'aws-cdk-lib/aws-sns';
import { IAlertable } from '../alertable';

export interface SnsTopicAlerterProps {
  readonly topic?: ITopic;
}

export class SnsTopicAlerter implements IAlertable {
  protected topic?:ITopic;

  constructor(props: SnsTopicAlerterProps) {
    this.topic = props.topic;
  }

  /**
   * Creates topic from a given stack.
   * @param scope The Stack to create a topic within
   * @protected
   * @return A topic with the default encryption and no specific resource policy.
   */
  private createTopic(alarm:Alarm):ITopic {
    const scope = Stack.of(alarm);
    return new Topic(scope, scope.stackName+'-WakefulTopic', {
      masterKey: Key.fromLookup(scope, scope.stackName+'-WakefulSNSKey', {
        aliasName: 'aws/sns',
      }),
      fifo: false,
    });
  }

  subscribeToAlarm(alarm: Alarm): void {
    if (this.topic === undefined || this.topic == null) {
      this.topic = this.createTopic(alarm);
    }
    alarm.addAlarmAction(new SnsAction(this.topic));
  }
}