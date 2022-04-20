# CDKWakeful

The idea behind CDKWakeful is simple: reduce the undifferentiated heavily lifting in monitoring and alerting so that you
can focus on creating custom metrics and threholds around your business logic.  To do this, CDKWakeful uses
[CDK Aspects](https://docs.aws.amazon.com/cdk/latest/guide/aspects.html) to introspect your code and provide a low
water mark of alarms.  In addition, CDKWakeful also creates mechanisms to automatically subscribe and be alerted to an
incident.  CDKWakeful supports both typescript and python.

A simple of example of how to use CDKWakeful is as follows

```python
import os

from aws_cdk import core as cdk

from integration_test.integration_test_stack import IntegrationTestStack
from cdk_wakeful.cdk_wakeful import CDKWakeful
from cdk_wakeful.logger import LogLevel
from cdk_wakeful.sns_topic_alerter import SnsTopicAlerter

app = cdk.App()
stack = ExampleStack(app, "IntegrationTestStack",)

cdk.Aspects.of(stack).add(CDKWakeful(
    log_level=LogLevel.INFO,
    include_best_practices=True,
    include_errors=True,
    include_throttles=True,
    alertables=[SnsTopicAlerter(topic=stack.notification_topic)]
))
app.synth()
```

## Alarms

CDKWakeful has three types of alarms: Best Practices, Errors, and Throttles.  Through the CDKWakeful you can toggle
which of these categories resources are alarmed.

Best Practices are Alarms describe by several sources as "best practices."  These include blog posts and documentation in
the service itself.  For example, [Recommended CloudWatch alarms for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cloudwatch-alarms.html)
lists a number of metrics recommended by the Amazon OpenSearch service in the developer guide.  Errors are defined as any
error *not* proposed by user.  For example, if an API Gateway returns as 5XX error, this is an error.  This indicates something
is wrong with the API Gateway or how it was configured.  In constrast, a 4XX error is not defined as an error since this error
occurs because of the client's request (for example a client does not authenticate with the API Gateway).  Throttles
occur when the number of calls to a given API exceed the maximum allow API request.  In many cases, the limits can be
adjusted by contacting the [AWS Support Center](https://console.aws.amazon.com/support/home#/)

### Services Alarmed

We support the following services:

* [Amazon API Gateway](https://aws.amazon.com/api-gateway/)
* [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
* [Amazon Elastic Compute Cloud (Amazon EC2)](https://aws.amazon.com/pm/ec2/)
* [Amazon ElastiCache](https://aws.amazon.com/elasticache/)
* [AWS Lambda](https://aws.amazon.com/lambda/)
* [Elastic Load Balancing (ELB)](https://aws.amazon.com/elasticloadbalancing/)
* [Amazon OpenSearch Service (successor to Amazon Elasticsearch Service)](https://aws.amazon.com/opensearch-service/)
* [Amazon Relational Database Service (Amazon RDS)](https://aws.amazon.com/rds/)
* [Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3/)
* [Simple Notification Service (Amazon SNS)](https://aws.amazon.com/sns/)
* [AWS Step Functions](https://aws.amazon.com/step-functions/)

## Notifications

CDKWakeful supports three main methods of receiving notifications.

* [AWS System Manager Incident Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/incident-manager.html)
* Slack channels via [AWS Chatbot](https://aws.amazon.com/chatbot/)
* [Amazon Simple Notification Service](https://aws.amazon.com/sns/)

In addition, we also support a "no op" method of notification that sends the alert nowhere.

# How to use

To build your local version of CDKWakeful simply run `npm run build`

When your local version of CDKWakeful builds successfully, you can test it to create
a new CDK Project by going into another directory and invoking the package directly:

You can make a CDK python project using `cdk init --language=python` or CDK Typescript project using `cdk init app --language=typescript`

Navigate to the CDKWakeful directory and build the project.

```console
$ cd /path/to/local/cdkwakeful
$ npm run build
```

Navigate to the `dist` copy the `js` or `python` folders into your project.  Below is an example for a typescript project.

```console
$ cp -R dist/js /path/to/my-project
```

Navigate back to your project and install the package.

For Typescript run the following command:

```console
$ npm i js/CDKWakeful@0.0.0.jsii.tgz
```

For Python run the following command:

```console
pip install python/cdk_wakeful-0.0.0-py3-none-any.whl

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

