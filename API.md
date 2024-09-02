# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### AlarmerProps <a name="AlarmerProps" id="cdk-wakeful.AlarmerProps"></a>

#### Initializer <a name="Initializer" id="cdk-wakeful.AlarmerProps.Initializer"></a>

```typescript
import { AlarmerProps } from 'cdk-wakeful'

const alarmerProps: AlarmerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.AlarmerProps.property.alertables">alertables</a></code> | <code><a href="#cdk-wakeful.IAlertable">IAlertable</a>[]</code> | *No description.* |
| <code><a href="#cdk-wakeful.AlarmerProps.property.logIgnores">logIgnores</a></code> | <code>boolean</code> | Whether or not to log informational message regard resource not supported or cases where monitoring already exists. |
| <code><a href="#cdk-wakeful.AlarmerProps.property.logLevel">logLevel</a></code> | <code>cdk-wakeful.logger.LogLevel</code> | *No description.* |

---

##### `alertables`<sup>Optional</sup> <a name="alertables" id="cdk-wakeful.AlarmerProps.property.alertables"></a>

```typescript
public readonly alertables: IAlertable[];
```

- *Type:* <a href="#cdk-wakeful.IAlertable">IAlertable</a>[]

---

##### `logIgnores`<sup>Optional</sup> <a name="logIgnores" id="cdk-wakeful.AlarmerProps.property.logIgnores"></a>

```typescript
public readonly logIgnores: boolean;
```

- *Type:* boolean

Whether or not to log informational message regard resource not supported or cases where monitoring already exists.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="cdk-wakeful.AlarmerProps.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* cdk-wakeful.logger.LogLevel

---

### IncidentManagerAlerterProps <a name="IncidentManagerAlerterProps" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps"></a>

#### Initializer <a name="Initializer" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps.Initializer"></a>

```typescript
import { incidentManagerAlerter } from 'cdk-wakeful'

const incidentManagerAlerterProps: incidentManagerAlerter.IncidentManagerAlerterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps.property.responsePlanArn">responsePlanArn</a></code> | <code>string</code> | *No description.* |

---

##### `responsePlanArn`<sup>Required</sup> <a name="responsePlanArn" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps.property.responsePlanArn"></a>

```typescript
public readonly responsePlanArn: string;
```

- *Type:* string

---

### SnsTopicAlerterProps <a name="SnsTopicAlerterProps" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps"></a>

#### Initializer <a name="Initializer" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps.Initializer"></a>

```typescript
import { snsTopicAlerter } from 'cdk-wakeful'

const snsTopicAlerterProps: snsTopicAlerter.SnsTopicAlerterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps.property.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps.property.topic"></a>

```typescript
public readonly topic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

### WakefulAlarmerProps <a name="WakefulAlarmerProps" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps"></a>

#### Initializer <a name="Initializer" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.Initializer"></a>

```typescript
import { cdkWakeful } from 'cdk-wakeful'

const wakefulAlarmerProps: cdkWakeful.WakefulAlarmerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.alertables">alertables</a></code> | <code><a href="#cdk-wakeful.IAlertable">IAlertable</a>[]</code> | *No description.* |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeBestPractices">includeBestPractices</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeErrors">includeErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeThrottles">includeThrottles</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.logIgnores">logIgnores</a></code> | <code>boolean</code> | Whether or not to log informational message regard resource not supported or cases where monitoring already exists. |
| <code><a href="#cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.logLevel">logLevel</a></code> | <code>cdk-wakeful.logger.LogLevel</code> | Whether or not to enable additional information, description, and messages in log messages. |

---

##### `alertables`<sup>Optional</sup> <a name="alertables" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.alertables"></a>

```typescript
public readonly alertables: IAlertable[];
```

- *Type:* <a href="#cdk-wakeful.IAlertable">IAlertable</a>[]

---

##### `includeBestPractices`<sup>Optional</sup> <a name="includeBestPractices" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeBestPractices"></a>

```typescript
public readonly includeBestPractices: boolean;
```

- *Type:* boolean

---

##### `includeErrors`<sup>Optional</sup> <a name="includeErrors" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeErrors"></a>

```typescript
public readonly includeErrors: boolean;
```

- *Type:* boolean

---

##### `includeThrottles`<sup>Optional</sup> <a name="includeThrottles" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.includeThrottles"></a>

```typescript
public readonly includeThrottles: boolean;
```

- *Type:* boolean

---

##### `logIgnores`<sup>Optional</sup> <a name="logIgnores" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.logIgnores"></a>

```typescript
public readonly logIgnores: boolean;
```

- *Type:* boolean

Whether or not to log informational message regard resource not supported or cases where monitoring already exists.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="cdk-wakeful.cdkWakeful.WakefulAlarmerProps.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* cdk-wakeful.logger.LogLevel

Whether or not to enable additional information, description, and messages in log messages.

---

## Classes <a name="Classes" id="Classes"></a>

### Alarmer <a name="Alarmer" id="cdk-wakeful.Alarmer"></a>

Base class for Modifiers.

#### Initializers <a name="Initializers" id="cdk-wakeful.Alarmer.Initializer"></a>

```typescript
import { Alarmer } from 'cdk-wakeful'

new Alarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.Alarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.Alarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.Alarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.Alarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.Alarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.Alarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Alarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.Alarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Alarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.Alarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Alarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### ApiGatewayServiceAlarmer <a name="ApiGatewayServiceAlarmer" id="cdk-wakeful.ApiGatewayServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.ApiGatewayServiceAlarmer.Initializer"></a>

```typescript
import { ApiGatewayServiceAlarmer } from 'cdk-wakeful'

new ApiGatewayServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.ApiGatewayServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.ApiGatewayServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.ApiGatewayServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.ApiGatewayServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.ApiGatewayServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.ApiGatewayServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ApiGatewayServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.ApiGatewayServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ApiGatewayServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.ApiGatewayServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ApiGatewayServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### CDKWakeful <a name="CDKWakeful" id="cdk-wakeful.cdkWakeful.CDKWakeful"></a>

- *Implements:* aws-cdk-lib.IAspect

Base class for Modifiers.

#### Initializers <a name="Initializers" id="cdk-wakeful.cdkWakeful.CDKWakeful.Initializer"></a>

```typescript
import { cdkWakeful } from 'cdk-wakeful'

new cdkWakeful.CDKWakeful(props: WakefulAlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.cdkWakeful.CDKWakeful.Initializer.parameter.props">props</a></code> | <code>cdk-wakeful.cdkWakeful.WakefulAlarmerProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.cdkWakeful.CDKWakeful.Initializer.parameter.props"></a>

- *Type:* cdk-wakeful.cdkWakeful.WakefulAlarmerProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.cdkWakeful.CDKWakeful.visit">visit</a></code> | Visits construct and Alarms. |

---

##### `visit` <a name="visit" id="cdk-wakeful.cdkWakeful.CDKWakeful.visit"></a>

```typescript
public visit(node: IConstruct): void
```

Visits construct and Alarms.

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.cdkWakeful.CDKWakeful.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### DynamodbServiceAlarmer <a name="DynamodbServiceAlarmer" id="cdk-wakeful.DynamodbServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.DynamodbServiceAlarmer.Initializer"></a>

```typescript
import { DynamodbServiceAlarmer } from 'cdk-wakeful'

new DynamodbServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.DynamodbServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.DynamodbServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.DynamodbServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.DynamodbServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.DynamodbServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.DynamodbServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.DynamodbServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.DynamodbServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.DynamodbServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.DynamodbServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.DynamodbServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### Ec2ServiceAlarmer <a name="Ec2ServiceAlarmer" id="cdk-wakeful.Ec2ServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.Ec2ServiceAlarmer.Initializer"></a>

```typescript
import { Ec2ServiceAlarmer } from 'cdk-wakeful'

new Ec2ServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.Ec2ServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.Ec2ServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.Ec2ServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.Ec2ServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.Ec2ServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.Ec2ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Ec2ServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.Ec2ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Ec2ServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.Ec2ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.Ec2ServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### ElasticacheServiceAlarmer <a name="ElasticacheServiceAlarmer" id="cdk-wakeful.ElasticacheServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.ElasticacheServiceAlarmer.Initializer"></a>

```typescript
import { ElasticacheServiceAlarmer } from 'cdk-wakeful'

new ElasticacheServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.ElasticacheServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.ElasticacheServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.ElasticacheServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.ElasticacheServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.ElasticacheServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.ElasticacheServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ElasticacheServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.ElasticacheServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ElasticacheServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.ElasticacheServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.ElasticacheServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### IncidentManagerAlerter <a name="IncidentManagerAlerter" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter"></a>

- *Implements:* <a href="#cdk-wakeful.IAlertable">IAlertable</a>

#### Initializers <a name="Initializers" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.Initializer"></a>

```typescript
import { incidentManagerAlerter } from 'cdk-wakeful'

new incidentManagerAlerter.IncidentManagerAlerter(props: IncidentManagerAlerterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.Initializer.parameter.props">props</a></code> | <code>cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.Initializer.parameter.props"></a>

- *Type:* cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.subscribeToAlarm">subscribeToAlarm</a></code> | *No description.* |

---

##### `subscribeToAlarm` <a name="subscribeToAlarm" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm): void
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter.subscribeToAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---




### LambdaServiceAlarmer <a name="LambdaServiceAlarmer" id="cdk-wakeful.LambdaServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.LambdaServiceAlarmer.Initializer"></a>

```typescript
import { LambdaServiceAlarmer } from 'cdk-wakeful'

new LambdaServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.LambdaServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.LambdaServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.LambdaServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.LambdaServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.LambdaServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.LambdaServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.LambdaServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.LambdaServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.LambdaServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.LambdaServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.LambdaServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### Logger <a name="Logger" id="cdk-wakeful.logger.Logger"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.logger.Logger.Initializer"></a>

```typescript
import { logger } from 'cdk-wakeful'

new logger.Logger(level: LogLevel)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.logger.Logger.Initializer.parameter.level">level</a></code> | <code>cdk-wakeful.logger.LogLevel</code> | *No description.* |

---

##### `level`<sup>Required</sup> <a name="level" id="cdk-wakeful.logger.Logger.Initializer.parameter.level"></a>

- *Type:* cdk-wakeful.logger.LogLevel

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.logger.Logger.debug">debug</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.Logger.error">error</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.Logger.fatal">fatal</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.Logger.info">info</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.Logger.silly">silly</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.Logger.warn">warn</a></code> | *No description.* |

---

##### `debug` <a name="debug" id="cdk-wakeful.logger.Logger.debug"></a>

```typescript
public debug(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.debug.parameter.message"></a>

- *Type:* string

---

##### `error` <a name="error" id="cdk-wakeful.logger.Logger.error"></a>

```typescript
public error(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.error.parameter.message"></a>

- *Type:* string

---

##### `fatal` <a name="fatal" id="cdk-wakeful.logger.Logger.fatal"></a>

```typescript
public fatal(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.fatal.parameter.message"></a>

- *Type:* string

---

##### `info` <a name="info" id="cdk-wakeful.logger.Logger.info"></a>

```typescript
public info(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.info.parameter.message"></a>

- *Type:* string

---

##### `silly` <a name="silly" id="cdk-wakeful.logger.Logger.silly"></a>

```typescript
public silly(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.silly.parameter.message"></a>

- *Type:* string

---

##### `warn` <a name="warn" id="cdk-wakeful.logger.Logger.warn"></a>

```typescript
public warn(message: string): void
```

###### `message`<sup>Required</sup> <a name="message" id="cdk-wakeful.logger.Logger.warn.parameter.message"></a>

- *Type:* string

---




### NoOpAlerter <a name="NoOpAlerter" id="cdk-wakeful.noOpAlerter.NoOpAlerter"></a>

- *Implements:* <a href="#cdk-wakeful.IAlertable">IAlertable</a>

#### Initializers <a name="Initializers" id="cdk-wakeful.noOpAlerter.NoOpAlerter.Initializer"></a>

```typescript
import { noOpAlerter } from 'cdk-wakeful'

new noOpAlerter.NoOpAlerter()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.noOpAlerter.NoOpAlerter.subscribeToAlarm">subscribeToAlarm</a></code> | *No description.* |

---

##### `subscribeToAlarm` <a name="subscribeToAlarm" id="cdk-wakeful.noOpAlerter.NoOpAlerter.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm): void
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="cdk-wakeful.noOpAlerter.NoOpAlerter.subscribeToAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---




### OpensearchServiceAlarmer <a name="OpensearchServiceAlarmer" id="cdk-wakeful.OpensearchServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.OpensearchServiceAlarmer.Initializer"></a>

```typescript
import { OpensearchServiceAlarmer } from 'cdk-wakeful'

new OpensearchServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.OpensearchServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.OpensearchServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.OpensearchServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.OpensearchServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.OpensearchServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.OpensearchServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.OpensearchServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.OpensearchServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.OpensearchServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.OpensearchServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.OpensearchServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### RdsServiceAlarmer <a name="RdsServiceAlarmer" id="cdk-wakeful.RdsServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.RdsServiceAlarmer.Initializer"></a>

```typescript
import { RdsServiceAlarmer } from 'cdk-wakeful'

new RdsServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.RdsServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.RdsServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.RdsServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.RdsServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.RdsServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.RdsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.RdsServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.RdsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.RdsServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.RdsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.RdsServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### S3ServiceAlarmer <a name="S3ServiceAlarmer" id="cdk-wakeful.S3ServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.S3ServiceAlarmer.Initializer"></a>

```typescript
import { S3ServiceAlarmer } from 'cdk-wakeful'

new S3ServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.S3ServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.S3ServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.S3ServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.S3ServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.S3ServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.S3ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.S3ServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.S3ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.S3ServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.S3ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.S3ServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### SlackAlerter <a name="SlackAlerter" id="cdk-wakeful.slackAlerter.SlackAlerter"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.slackAlerter.SlackAlerter.Initializer"></a>

```typescript
import { slackAlerter } from 'cdk-wakeful'

new slackAlerter.SlackAlerter(slackChannelConfiguration: SlackChannelConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.slackAlerter.SlackAlerter.Initializer.parameter.slackChannelConfiguration">slackChannelConfiguration</a></code> | <code>aws-cdk-lib.aws_chatbot.SlackChannelConfiguration</code> | *No description.* |

---

##### `slackChannelConfiguration`<sup>Required</sup> <a name="slackChannelConfiguration" id="cdk-wakeful.slackAlerter.SlackAlerter.Initializer.parameter.slackChannelConfiguration"></a>

- *Type:* aws-cdk-lib.aws_chatbot.SlackChannelConfiguration

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.slackAlerter.SlackAlerter.subscribeToAlarm">subscribeToAlarm</a></code> | *No description.* |

---

##### `subscribeToAlarm` <a name="subscribeToAlarm" id="cdk-wakeful.slackAlerter.SlackAlerter.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm): void
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="cdk-wakeful.slackAlerter.SlackAlerter.subscribeToAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---




### SnsServiceAlarmer <a name="SnsServiceAlarmer" id="cdk-wakeful.SnsServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.SnsServiceAlarmer.Initializer"></a>

```typescript
import { SnsServiceAlarmer } from 'cdk-wakeful'

new SnsServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.SnsServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.SnsServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.SnsServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.SnsServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.SnsServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.SnsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.SnsServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.SnsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.SnsServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.SnsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.SnsServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### SnsTopicAlerter <a name="SnsTopicAlerter" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerter"></a>

- *Implements:* <a href="#cdk-wakeful.IAlertable">IAlertable</a>

#### Initializers <a name="Initializers" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.Initializer"></a>

```typescript
import { snsTopicAlerter } from 'cdk-wakeful'

new snsTopicAlerter.SnsTopicAlerter(props: SnsTopicAlerterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.Initializer.parameter.props">props</a></code> | <code>cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.Initializer.parameter.props"></a>

- *Type:* cdk-wakeful.snsTopicAlerter.SnsTopicAlerterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.subscribeToAlarm">subscribeToAlarm</a></code> | *No description.* |

---

##### `subscribeToAlarm` <a name="subscribeToAlarm" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm): void
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="cdk-wakeful.snsTopicAlerter.SnsTopicAlerter.subscribeToAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---




### StepFunctionsServiceAlarmer <a name="StepFunctionsServiceAlarmer" id="cdk-wakeful.StepFunctionsServiceAlarmer"></a>

#### Initializers <a name="Initializers" id="cdk-wakeful.StepFunctionsServiceAlarmer.Initializer"></a>

```typescript
import { StepFunctionsServiceAlarmer } from 'cdk-wakeful'

new StepFunctionsServiceAlarmer(props: AlarmerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wakeful.StepFunctionsServiceAlarmer.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-wakeful.StepFunctionsServiceAlarmer.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wakeful.AlarmerProps">AlarmerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.StepFunctionsServiceAlarmer.bestPractice">bestPractice</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.StepFunctionsServiceAlarmer.errors">errors</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.StepFunctionsServiceAlarmer.throttles">throttles</a></code> | *No description.* |

---

##### `bestPractice` <a name="bestPractice" id="cdk-wakeful.StepFunctionsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.StepFunctionsServiceAlarmer.bestPractice.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `errors` <a name="errors" id="cdk-wakeful.StepFunctionsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.StepFunctionsServiceAlarmer.errors.parameter.node"></a>

- *Type:* constructs.IConstruct

---

##### `throttles` <a name="throttles" id="cdk-wakeful.StepFunctionsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct): void
```

###### `node`<sup>Required</sup> <a name="node" id="cdk-wakeful.StepFunctionsServiceAlarmer.throttles.parameter.node"></a>

- *Type:* constructs.IConstruct

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IAlertable <a name="IAlertable" id="cdk-wakeful.IAlertable"></a>

- *Implemented By:* cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter, cdk-wakeful.noOpAlerter.NoOpAlerter, cdk-wakeful.slackAlerter.SlackAlerter, cdk-wakeful.snsTopicAlerter.SnsTopicAlerter, <a href="#cdk-wakeful.IAlertable">IAlertable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.IAlertable.subscribeToAlarm">subscribeToAlarm</a></code> | *No description.* |

---

##### `subscribeToAlarm` <a name="subscribeToAlarm" id="cdk-wakeful.IAlertable.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm): void
```

###### `alarm`<sup>Required</sup> <a name="alarm" id="cdk-wakeful.IAlertable.subscribeToAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---


## Enums <a name="Enums" id="Enums"></a>

### LogLevel <a name="LogLevel" id="cdk-wakeful.logger.LogLevel"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wakeful.logger.LogLevel.FATAL">FATAL</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.LogLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.LogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#cdk-wakeful.logger.LogLevel.SILLY">SILLY</a></code> | *No description.* |

---

##### `FATAL` <a name="FATAL" id="cdk-wakeful.logger.LogLevel.FATAL"></a>

---


##### `ERROR` <a name="ERROR" id="cdk-wakeful.logger.LogLevel.ERROR"></a>

---


##### `WARN` <a name="WARN" id="cdk-wakeful.logger.LogLevel.WARN"></a>

---


##### `INFO` <a name="INFO" id="cdk-wakeful.logger.LogLevel.INFO"></a>

---


##### `DEBUG` <a name="DEBUG" id="cdk-wakeful.logger.LogLevel.DEBUG"></a>

---


##### `SILLY` <a name="SILLY" id="cdk-wakeful.logger.LogLevel.SILLY"></a>

---

