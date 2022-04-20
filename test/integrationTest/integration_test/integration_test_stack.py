from aws_cdk import (
    core as cdk,
    aws_apigateway as apigateway,
    aws_apigatewayv2 as apigatewayv2,
    aws_apigatewayv2_integrations as apigatewayv2_integrations,
    aws_dynamodb as ddb,
    aws_lambda as lmb,
    aws_iam as iam,
    aws_ec2 as ec2,
    aws_sns as sns,
)
from os import path

class IntegrationTestStack(cdk.Stack):

    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        self.__notification_topic = sns.Topic(self, 'TestTopic')
        self.__notification_topic.add_to_resource_policy(iam.PolicyStatement(
            effect=iam.Effect.ALLOW,
            principals=[iam.ServicePrincipal('cloudwatch.amazonaws.com')],
            actions=['sns:Publish'],
            resources=[self.__notification_topic.topic_arn]
        ))
        vpc = ec2.Vpc(self, 'TheVpc',
                      max_azs=2)

        function = lmb.Function(self, 'Function',
                                code=lmb.Code.from_asset(path.join(path.dirname(__file__), '../assets/lambda/example_function')),
                                handler='index.handler',
                                runtime=lmb.Runtime.PYTHON_3_9)

        v1_api = apigateway.RestApi(self, 'TestApi')
        v1_api.root.add_resource('Books').add_method('GET', apigateway.LambdaIntegration(function))


        v2_api = apigatewayv2.HttpApi(self, 'TestV2Api')
        v2_api.add_routes(
            path='/',
            methods=[apigatewayv2.HttpMethod.ANY],
            integration=apigatewayv2_integrations.HttpUrlIntegration(
                'AWS',
                url='https://aws.amazon.com',
                method=apigatewayv2.HttpMethod.ANY
            )
        )

        table = ddb.Table(self, 'DDBTable',
                          partition_key=ddb.Attribute(
                              name='id',
                              type= ddb.AttributeType.STRING
                          ))

        instance = ec2.Instance(self, 'Instance',
                                vpc=vpc,
                                machine_image=ec2.AmazonLinuxImage(),
                                instance_type=ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MEDIUM))
    @property
    def notification_topic(self) -> sns.Topic:
        return self.__notification_topic