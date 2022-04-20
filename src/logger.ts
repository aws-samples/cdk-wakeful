export enum LogLevel{
  FATAL = 'FATAL',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  SILLY = 'TRACE',
}

export class Logger {
  private readonly level:LogLevel;
  constructor(level: LogLevel) {
    this.level = level;
  }

  public fatal(message: string): void {
    switch (this.level) {
      case LogLevel.FATAL:
        this.logMessage(message);
    }
  }

  public error(message: string):void {
    switch (this.level) {
      case LogLevel.FATAL:
      case LogLevel.ERROR:
        this.logMessage(message);
    }
  }

  public warn(message: string):void {
    switch (this.level) {
      case LogLevel.FATAL:
      case LogLevel.ERROR:
      case LogLevel.WARN:
        this.logMessage(message);
    }
  }

  public info(message: string):void {
    switch (this.level) {
      case LogLevel.FATAL:
      case LogLevel.ERROR:
      case LogLevel.WARN:
      case LogLevel.INFO:
        this.logMessage(message);
    }
  }

  public debug(message: string): void {
    switch (this.level) {
      case LogLevel.FATAL:
      case LogLevel.ERROR:
      case LogLevel.WARN:
      case LogLevel.INFO:
      case LogLevel.DEBUG:
        this.logMessage(message);
    }
  }

  public silly(message: string): void {
    switch (this.level) {
      case LogLevel.FATAL:
      case LogLevel.ERROR:
      case LogLevel.WARN:
      case LogLevel.INFO:
      case LogLevel.DEBUG:
      case LogLevel.SILLY:
        this.logMessage(message);
    }
  }

  private logMessage(message:string): void {
    console.log('['+new Date().toISOString()+']'+' ['+this.level+'] ' + message);
  }
}