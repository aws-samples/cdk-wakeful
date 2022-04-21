/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
*/
import { IAspect } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { Alarmer, AlarmerProps } from './alarmer';
import { ApiGatewayServiceAlarmer } from './alarmers/api-gateway-service-alarmer';
import { DynamodbServiceAlarmer } from './alarmers/dynamodb-service-alarmer';
import { Ec2ServiceAlarmer } from './alarmers/ec2-service-alarmer';
import { ElasticacheServiceAlarmer } from './alarmers/elasticache-service-alarmer';
import { LambdaServiceAlarmer } from './alarmers/lambda-service-alarmer';
import { LoadBalancingServiceAlarmer } from './alarmers/load-balancing-service-alarmer';
import { OpensearchServiceAlarmer } from './alarmers/opensearch-service-alarmer';
import { RdsServiceAlarmer } from './alarmers/rds-service-alarmer';
import { S3ServiceAlarmer } from './alarmers/s3-service-alarmer';
import { SnsServiceAlarmer } from './alarmers/sns-service-alarmer';
import { StepFunctionsServiceAlarmer } from './alarmers/step-functions-service-alarmer';
import { IAlertable } from './alertable';
import { NoOpAlerter } from './alertables/no-op-alerter';
import { LogLevel } from './logger';

export interface WakefulAlarmerProps {
  /**
   * Whether or not to enable additional information, description, and messages in log messages
   * @default
   */
  readonly logLevel?: LogLevel;

  /**
   * Whether or not to log informational message regard resource not supported or cases where monitoring already exists
   */
  readonly logIgnores?: boolean;


  readonly includeBestPractices?: boolean;

  readonly includeErrors?: boolean;

  readonly includeThrottles?: boolean;

  readonly alertables?: Array<IAlertable>;
}

/**
 * Base class for Modifiers
 */
export class CDKWakeful implements IAspect {
  protected props: WakefulAlarmerProps;
  protected includeBestPractices: boolean;
  protected includeErrors: boolean;
  protected includeThrottles?: boolean;
  protected alertables: Array<IAlertable>;
  protected alarmers: Array<Alarmer>;

  constructor(props:WakefulAlarmerProps) {
    this.props = props;
    this.includeBestPractices = props === undefined || props.includeBestPractices === undefined ? true : this.props.includeBestPractices!;
    this.includeErrors = props === undefined || props.includeErrors === undefined ? true : this.props.includeErrors!;
    this.includeThrottles = props === undefined || props.includeThrottles === undefined ? true: this.props.includeThrottles!;
    this.alertables = props === undefined || props.alertables === undefined ? [new NoOpAlerter()]: this.props.alertables!;

    const alarmerProps:AlarmerProps = {
      logIgnores: this.props.logIgnores,
      logLevel: this.props.logLevel,
      alertables: this.alertables,
    };
    this.alarmers = [new ApiGatewayServiceAlarmer(alarmerProps),
      new DynamodbServiceAlarmer(alarmerProps),
      new Ec2ServiceAlarmer(alarmerProps),
      new ElasticacheServiceAlarmer(alarmerProps),
      new LambdaServiceAlarmer(alarmerProps),
      new LoadBalancingServiceAlarmer(alarmerProps),
      new OpensearchServiceAlarmer(alarmerProps),
      new RdsServiceAlarmer(alarmerProps),
      new S3ServiceAlarmer(alarmerProps),
      new SnsServiceAlarmer(alarmerProps),
      new StepFunctionsServiceAlarmer(alarmerProps)];
  }

  /**
  * Visits construct and Alarms
  * @param node
  */
  public visit(node: IConstruct): void {
    this.alarmers.forEach((a) => {
      if (this.includeBestPractices) {
        a.bestPractice(node);
      }
      if (this.includeErrors) {
        a.errors(node);
      }
      if (this.includeThrottles) {
        a.throttles(node);
      }
    });
  }
}

