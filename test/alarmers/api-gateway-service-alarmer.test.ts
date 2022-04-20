import { Template } from '@aws-cdk/assertions';
import { RestApi } from '@aws-cdk/aws-apigateway';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { HttpUrlIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { Topic } from '@aws-cdk/aws-sns';
import { Aspects, IAspect, IConstruct, Stack } from '@aws-cdk/core';
import { ApiGatewayServiceAlarmer } from '../../src/alarmers/api-gateway-service-alarmer';

class BestPracticeAspect implements IAspect {
  visit(node: IConstruct): void {
    new ApiGatewayServiceAlarmer({}).bestPractice(node);
  }
}

class ErrorsAspect implements IAspect {
  visit(node: IConstruct) {
    new ApiGatewayServiceAlarmer({}).errors(node);
  }
}

// Based upon https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigateway-readme.html
function includeTestApiGateway(stack: Stack) : void {
  const api = new RestApi(stack, 'books-api', {
    deploy: false,
  });
  api.root.addMethod('ANY');

  const books = api.root.addResource('books');
  books.addMethod('GET');
  books.addMethod('POST');

  const book = books.addResource('{book_id}');
  book.addMethod('GET');
  book.addMethod('DELETE');
}

// Based upon https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigatewayv2-readme.html
function includeTestV2ApiGateway(stack : Stack) : void {
  const httpApi = new HttpApi(stack, 'HttpApi');
  httpApi.addRoutes({
    path: '/',
    methods: [HttpMethod.ANY],
    integration: new HttpUrlIntegration('amazon', 'https://aws.amazon.com/', {
      method: HttpMethod.ANY,
    }),
  });
}

describe('Amazon API Gateway', () => {
  test('No Gateway Tests', () => {
    const bestPractice = new Stack();
    const errors = new Stack();
    Aspects.of(bestPractice).add(new BestPracticeAspect());
    Aspects.of(errors).add(new ErrorsAspect());
    new Topic(bestPractice, 'BestPractice');
    new Topic(errors, 'Errors');

    const bestPracticeTemplate = Template.fromStack(bestPractice);
    bestPracticeTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);

    const errorsTemplate = Template.fromStack(errors);
    errorsTemplate.resourceCountIs('AWS::CloudWatch::Alarm', 0);
  });

  test('Best Practices: With ApiGateway V1', () => {
    const stackWithApiGateway = new Stack();
    Aspects.of(stackWithApiGateway).add(new BestPracticeAspect());
    includeTestApiGateway(stackWithApiGateway);

    const template = Template.fromStack(stackWithApiGateway);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 5,
      Threshold: 2000,
      TreatMissingData: 'notBreaching',
      MetricName: 'Latency',
      ComparisonOperator: 'GreaterThanOrEqualToThreshold',
      ExtendedStatistic: 'p90',
    });
  });

  test('Errors: With ApiGateway v1', () => {
    const withV1Gateway = new Stack();
    Aspects.of(withV1Gateway).add(new ErrorsAspect());
    includeTestApiGateway(withV1Gateway);
    const template = Template.fromStack(withV1Gateway);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: '5XXError',
      Statistic: 'Maximum',
    });
  });

  test('Errors: with ApiGateway v2', () =>{
    const withV2Gateway = new Stack();
    Aspects.of(withV2Gateway).add(new ErrorsAspect());
    includeTestV2ApiGateway(withV2Gateway);
    const template = Template.fromStack(withV2Gateway);
    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      EvaluationPeriods: 1,
      Threshold: 1,
      TreatMissingData: 'notBreaching',
      MetricName: '5xx',
      Statistic: 'Maximum',
    });
  });
});