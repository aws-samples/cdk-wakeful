#!/usr/bin/env python3
import os

from aws_cdk import core as cdk

from integration_test.integration_test_stack import IntegrationTestStack
from cdk_wakeful.cdk_wakeful import CDKWakeful
from cdk_wakeful.logger import LogLevel
from cdk_wakeful.sns_topic_alerter import SnsTopicAlerter

app = cdk.App()
stack = IntegrationTestStack(app, "IntegrationTestStack",)

cdk.Aspects.of(stack).add(CDKWakeful(
    log_level=LogLevel.INFO,
    include_best_practices=True,
    include_errors=True,
    include_throttles=True,
    alertables=[SnsTopicAlerter(topic=stack.notification_topic)]
))
app.synth()
