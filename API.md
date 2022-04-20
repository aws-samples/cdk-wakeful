# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AlarmerProps <a name="CDKWakeful.AlarmerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlarmerProps } from 'CDKWakeful'

const alarmerProps: AlarmerProps = { ... }
```

##### `alertables`<sup>Optional</sup> <a name="CDKWakeful.AlarmerProps.property.alertables"></a>

```typescript
public readonly alertables: IAlertable[];
```

- *Type:* [`CDKWakeful.IAlertable`](#CDKWakeful.IAlertable)[]

---

##### `logIgnores`<sup>Optional</sup> <a name="CDKWakeful.AlarmerProps.property.logIgnores"></a>

```typescript
public readonly logIgnores: boolean;
```

- *Type:* `boolean`

Whether or not to log informational message regard resource not supported or cases where monitoring already exists.

---

##### `logLevel`<sup>Optional</sup> <a name="CDKWakeful.AlarmerProps.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* [`CDKWakeful.logger.LogLevel`](#CDKWakeful.logger.LogLevel)

---

## Classes <a name="Classes"></a>

### Alarmer <a name="CDKWakeful.Alarmer"></a>

Base class for Modifiers.

#### Initializers <a name="CDKWakeful.Alarmer.Initializer"></a>

```typescript
import { Alarmer } from 'CDKWakeful'

new Alarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.Alarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.Alarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Alarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.Alarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Alarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.Alarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Alarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### ApiGatewayServiceAlarmer <a name="CDKWakeful.ApiGatewayServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.ApiGatewayServiceAlarmer.Initializer"></a>

```typescript
import { ApiGatewayServiceAlarmer } from 'CDKWakeful'

new ApiGatewayServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.ApiGatewayServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.ApiGatewayServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.ApiGatewayServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.ApiGatewayServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### DynamodbServiceAlarmer <a name="CDKWakeful.DynamodbServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.DynamodbServiceAlarmer.Initializer"></a>

```typescript
import { DynamodbServiceAlarmer } from 'CDKWakeful'

new DynamodbServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.DynamodbServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.DynamodbServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.DynamodbServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.DynamodbServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### Ec2ServiceAlarmer <a name="CDKWakeful.Ec2ServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.Ec2ServiceAlarmer.Initializer"></a>

```typescript
import { Ec2ServiceAlarmer } from 'CDKWakeful'

new Ec2ServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.Ec2ServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.Ec2ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.Ec2ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.Ec2ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### ElasticacheServiceAlarmer <a name="CDKWakeful.ElasticacheServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.ElasticacheServiceAlarmer.Initializer"></a>

```typescript
import { ElasticacheServiceAlarmer } from 'CDKWakeful'

new ElasticacheServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.ElasticacheServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.ElasticacheServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.ElasticacheServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.ElasticacheServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### LambdaServiceAlarmer <a name="CDKWakeful.LambdaServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.LambdaServiceAlarmer.Initializer"></a>

```typescript
import { LambdaServiceAlarmer } from 'CDKWakeful'

new LambdaServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.LambdaServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.LambdaServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.LambdaServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.LambdaServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### OpensearchServiceAlarmer <a name="CDKWakeful.OpensearchServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.OpensearchServiceAlarmer.Initializer"></a>

```typescript
import { OpensearchServiceAlarmer } from 'CDKWakeful'

new OpensearchServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.OpensearchServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.OpensearchServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.OpensearchServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.OpensearchServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### RdsServiceAlarmer <a name="CDKWakeful.RdsServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.RdsServiceAlarmer.Initializer"></a>

```typescript
import { RdsServiceAlarmer } from 'CDKWakeful'

new RdsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.RdsServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.RdsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.RdsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.RdsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### S3ServiceAlarmer <a name="CDKWakeful.S3ServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.S3ServiceAlarmer.Initializer"></a>

```typescript
import { S3ServiceAlarmer } from 'CDKWakeful'

new S3ServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.S3ServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.S3ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.S3ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.S3ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### SnsServiceAlarmer <a name="CDKWakeful.SnsServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.SnsServiceAlarmer.Initializer"></a>

```typescript
import { SnsServiceAlarmer } from 'CDKWakeful'

new SnsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.SnsServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.SnsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.SnsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.SnsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




### StepFunctionsServiceAlarmer <a name="CDKWakeful.StepFunctionsServiceAlarmer"></a>

#### Initializers <a name="CDKWakeful.StepFunctionsServiceAlarmer.Initializer"></a>

```typescript
import { StepFunctionsServiceAlarmer } from 'CDKWakeful'

new StepFunctionsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="CDKWakeful.StepFunctionsServiceAlarmer.parameter.props"></a>

- *Type:* [`CDKWakeful.AlarmerProps`](#CDKWakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="CDKWakeful.StepFunctionsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `errors` <a name="CDKWakeful.StepFunctionsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---

##### `throttles` <a name="CDKWakeful.StepFunctionsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="CDKWakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`@aws-cdk/core.IConstruct`](#@aws-cdk/core.IConstruct)

---




## Protocols <a name="Protocols"></a>

### IAlertable <a name="CDKWakeful.IAlertable"></a>

- *Implemented By:* [`CDKWakeful.incidentManagerAlerter.IncidentManagerAlerter`](#CDKWakeful.incidentManagerAlerter.IncidentManagerAlerter), [`CDKWakeful.noOpAlerter.NoOpAlerter`](#CDKWakeful.noOpAlerter.NoOpAlerter), [`CDKWakeful.slackAlerter.SlackAlerter`](#CDKWakeful.slackAlerter.SlackAlerter), [`CDKWakeful.snsTopicAlerter.SnsTopicAlerter`](#CDKWakeful.snsTopicAlerter.SnsTopicAlerter), [`CDKWakeful.IAlertable`](#CDKWakeful.IAlertable)

#### Methods <a name="Methods"></a>

##### `subscribeToAlarm` <a name="CDKWakeful.IAlertable.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm)
```

###### `alarm`<sup>Required</sup> <a name="CDKWakeful.IAlertable.parameter.alarm"></a>

- *Type:* [`@aws-cdk/aws-cloudwatch.Alarm`](#@aws-cdk/aws-cloudwatch.Alarm)

---


