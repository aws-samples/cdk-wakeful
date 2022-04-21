import { Stack } from 'aws-cdk-lib';
import { SlackChannelConfiguration } from 'aws-cdk-lib/aws-chatbot';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { SnsTopicAlerter, SnsTopicAlerterProps } from './sns-topic-alerter';

export class SlackAlerter extends SnsTopicAlerter {
  constructor(slackChannelConfiguration: SlackChannelConfiguration) {
    const scope = Stack.of(slackChannelConfiguration);
    const topic = new Topic(scope, scope.stackName+'-WakefulSlackTopic', {
      masterKey: Key.fromLookup(scope, scope.stackName+'-WakefulSlackSNSKey', {
        aliasName: 'aws/sns',
      }),
      fifo: false,
    });
    const superProps: SnsTopicAlerterProps = {
      topic: topic,
    };
    super(superProps);
    slackChannelConfiguration.addNotificationTopic(topic);
  }
}