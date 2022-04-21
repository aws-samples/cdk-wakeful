import { Aspects, IAspect, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Domain, EngineVersion } from 'aws-cdk-lib/aws-opensearchservice';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { IConstruct } from 'constructs';
import { OpensearchServiceAlarmer } from '../../src/alarmers/opensearch-service-alarmer';

class BestPracticeAspect implements IAspect {
  private alarmer: OpensearchServiceAlarmer = new OpensearchServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  private alarmer: OpensearchServiceAlarmer = new OpensearchServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.errors(node);
  }
}

class ThrottlesAspect implements IAspect {
  private alarmer: OpensearchServiceAlarmer = new OpensearchServiceAlarmer({});

  visit(node: IConstruct) {
    this.alarmer.throttles(node);
  }
}

function includeDomain(stack: Stack):void {
  new Domain(stack, 'Domain', {
    version: EngineVersion.OPENSEARCH_1_0,
  });
}

describe('OpenSearch', () => {
  test('No Domain Tests', () => {
    const bestPractice = new Stack();
    const errors = new Stack();
    const throttles = new Stack();
    Aspects.of(bestPractice).add(new BestPracticeAspect());
    Aspects.of(errors).add(new ErrorsAspect());
    Aspects.of(throttles).add(new ThrottlesAspect());
    new Topic(bestPractice, 'BestPractice');
    new Topic(errors, 'Errors');
    new Topic(throttles, 'Throttles');

    const bestPracticeTemplate = Template.fromStack(bestPractice);
    bestPracticeTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const errorsTemplate = Template.fromStack(errors);
    errorsTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const throttlesTemplate = Template.fromStack(throttles);
    throttlesTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Best Practices', () => {
    const stack = new Stack();
    includeDomain(stack);
    Aspects.of(stack).add(new BestPracticeAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
  });

  test('Errors', () => {
    const stack = new Stack();
    includeDomain(stack);
    Aspects.of(stack).add(new ErrorsAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 8);
  });

  test('Throttles', () => {
    const stack = new Stack();
    includeDomain(stack);
    Aspects.of(stack).add(new ThrottlesAspect());
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });
});