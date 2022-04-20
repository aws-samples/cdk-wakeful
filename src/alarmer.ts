/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
*/

import {
  Alarm, AlarmProps,
} from '@aws-cdk/aws-cloudwatch';
import {
  IConstruct,
  Stack,
} from '@aws-cdk/core';
import { IAlertable } from './alertable';
import { NoOpAlerter } from './alertables/no-op-alerter';
import { Logger, LogLevel } from './logger';

export interface AlarmerProps {
  /**
   * Whether or not to log informational message regard resource not supported or cases where monitoring already exists
   */
  readonly logIgnores?: boolean;

  readonly logLevel?: LogLevel;

  /**
   */
  readonly alertables?: Array<IAlertable>;
}

/**
 * Base class for Modifiers
 */
export abstract class Alarmer {
  protected logIgnores: boolean;
  protected logLevel: LogLevel;
  private logger:Logger;

  private alertables: Array<IAlertable>;

  constructor(props:AlarmerProps) {
    this.logIgnores = props === undefined || props.logIgnores === undefined ? false : props.logIgnores;
    this.logLevel = props === undefined || props.logLevel === undefined ? LogLevel.INFO : props.logLevel;
    this.alertables = props === undefined || props.alertables === undefined ? [new NoOpAlerter()] : props.alertables;

    this.logger = new Logger(this.logLevel);
  }

  /**
   * Generates a random seed for resources.
   * @protected
   */
  protected randomSeed(): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Subscribe Alarm to Topic
   * @protected
   * @param node
   * @param constructId
   * @param alarmProps
   */
  protected alarm(node: IConstruct, constructId: string, alarmProps: AlarmProps):void {
    const stack = Stack.of(node);
    const alarm = new Alarm(stack, constructId, alarmProps);
    this.alertables.forEach((value) => {
      this.logDebug('Alarming ' + typeof value);
      value.subscribeToAlarm(alarm);
    });
  }

  protected logWarn(message: string):void {
    this.logger.warn(message);
  }

  protected logError(message: string):void {
    this.logger.error(message);
  }

  protected logInfo(message: string):void {
    this.logger.info(message);
  }

  protected logDebug(message: string): void {
    this.logger.debug(message);
  }

  protected logSilly(message: string): void {
    this.logger.silly(message);
  }

  public abstract errors(node: IConstruct): void;
  public abstract throttles(node: IConstruct): void;
  public abstract bestPractice(node: IConstruct): void;
}

