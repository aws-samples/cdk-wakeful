# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### AlarmerProps <a name="cdk-wakeful.AlarmerProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AlarmerProps } from 'cdk-wakeful'

const alarmerProps: AlarmerProps = { ... }
```

##### `alertables`<sup>Optional</sup> <a name="cdk-wakeful.AlarmerProps.property.alertables"></a>

```typescript
public readonly alertables: IAlertable[];
```

- *Type:* [`cdk-wakeful.IAlertable`](#cdk-wakeful.IAlertable)[]

---

##### `logIgnores`<sup>Optional</sup> <a name="cdk-wakeful.AlarmerProps.property.logIgnores"></a>

```typescript
public readonly logIgnores: boolean;
```

- *Type:* `boolean`

Whether or not to log informational message regard resource not supported or cases where monitoring already exists.

---

##### `logLevel`<sup>Optional</sup> <a name="cdk-wakeful.AlarmerProps.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* [`cdk-wakeful.logger.LogLevel`](#cdk-wakeful.logger.LogLevel)

---

## Classes <a name="Classes"></a>

### Alarmer <a name="cdk-wakeful.Alarmer"></a>

Base class for Modifiers.

#### Initializers <a name="cdk-wakeful.Alarmer.Initializer"></a>

```typescript
import { Alarmer } from 'cdk-wakeful'

new Alarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.Alarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.Alarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Alarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.Alarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Alarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.Alarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Alarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### ApiGatewayServiceAlarmer <a name="cdk-wakeful.ApiGatewayServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.ApiGatewayServiceAlarmer.Initializer"></a>

```typescript
import { ApiGatewayServiceAlarmer } from 'cdk-wakeful'

new ApiGatewayServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.ApiGatewayServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.ApiGatewayServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.ApiGatewayServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.ApiGatewayServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ApiGatewayServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### DynamodbServiceAlarmer <a name="cdk-wakeful.DynamodbServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.DynamodbServiceAlarmer.Initializer"></a>

```typescript
import { DynamodbServiceAlarmer } from 'cdk-wakeful'

new DynamodbServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.DynamodbServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.DynamodbServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.DynamodbServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.DynamodbServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.DynamodbServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### Ec2ServiceAlarmer <a name="cdk-wakeful.Ec2ServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.Ec2ServiceAlarmer.Initializer"></a>

```typescript
import { Ec2ServiceAlarmer } from 'cdk-wakeful'

new Ec2ServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.Ec2ServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.Ec2ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.Ec2ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.Ec2ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.Ec2ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### ElasticacheServiceAlarmer <a name="cdk-wakeful.ElasticacheServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.ElasticacheServiceAlarmer.Initializer"></a>

```typescript
import { ElasticacheServiceAlarmer } from 'cdk-wakeful'

new ElasticacheServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.ElasticacheServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.ElasticacheServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.ElasticacheServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.ElasticacheServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.ElasticacheServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### LambdaServiceAlarmer <a name="cdk-wakeful.LambdaServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.LambdaServiceAlarmer.Initializer"></a>

```typescript
import { LambdaServiceAlarmer } from 'cdk-wakeful'

new LambdaServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.LambdaServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.LambdaServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.LambdaServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.LambdaServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.LambdaServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### OpensearchServiceAlarmer <a name="cdk-wakeful.OpensearchServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.OpensearchServiceAlarmer.Initializer"></a>

```typescript
import { OpensearchServiceAlarmer } from 'cdk-wakeful'

new OpensearchServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.OpensearchServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.OpensearchServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.OpensearchServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.OpensearchServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.OpensearchServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### RdsServiceAlarmer <a name="cdk-wakeful.RdsServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.RdsServiceAlarmer.Initializer"></a>

```typescript
import { RdsServiceAlarmer } from 'cdk-wakeful'

new RdsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.RdsServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.RdsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.RdsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.RdsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.RdsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### S3ServiceAlarmer <a name="cdk-wakeful.S3ServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.S3ServiceAlarmer.Initializer"></a>

```typescript
import { S3ServiceAlarmer } from 'cdk-wakeful'

new S3ServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.S3ServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.S3ServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.S3ServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.S3ServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.S3ServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### SnsServiceAlarmer <a name="cdk-wakeful.SnsServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.SnsServiceAlarmer.Initializer"></a>

```typescript
import { SnsServiceAlarmer } from 'cdk-wakeful'

new SnsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.SnsServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.SnsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.SnsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.SnsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.SnsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




### StepFunctionsServiceAlarmer <a name="cdk-wakeful.StepFunctionsServiceAlarmer"></a>

#### Initializers <a name="cdk-wakeful.StepFunctionsServiceAlarmer.Initializer"></a>

```typescript
import { StepFunctionsServiceAlarmer } from 'cdk-wakeful'

new StepFunctionsServiceAlarmer(props: AlarmerProps)
```

##### `props`<sup>Required</sup> <a name="cdk-wakeful.StepFunctionsServiceAlarmer.parameter.props"></a>

- *Type:* [`cdk-wakeful.AlarmerProps`](#cdk-wakeful.AlarmerProps)

---

#### Methods <a name="Methods"></a>

##### `bestPractice` <a name="cdk-wakeful.StepFunctionsServiceAlarmer.bestPractice"></a>

```typescript
public bestPractice(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `errors` <a name="cdk-wakeful.StepFunctionsServiceAlarmer.errors"></a>

```typescript
public errors(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---

##### `throttles` <a name="cdk-wakeful.StepFunctionsServiceAlarmer.throttles"></a>

```typescript
public throttles(node: IConstruct)
```

###### `node`<sup>Required</sup> <a name="cdk-wakeful.StepFunctionsServiceAlarmer.parameter.node"></a>

- *Type:* [`constructs.IConstruct`](#constructs.IConstruct)

---




## Protocols <a name="Protocols"></a>

### IAlertable <a name="cdk-wakeful.IAlertable"></a>

- *Implemented By:* [`cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter`](#cdk-wakeful.incidentManagerAlerter.IncidentManagerAlerter), [`cdk-wakeful.noOpAlerter.NoOpAlerter`](#cdk-wakeful.noOpAlerter.NoOpAlerter), [`cdk-wakeful.slackAlerter.SlackAlerter`](#cdk-wakeful.slackAlerter.SlackAlerter), [`cdk-wakeful.snsTopicAlerter.SnsTopicAlerter`](#cdk-wakeful.snsTopicAlerter.SnsTopicAlerter), [`cdk-wakeful.IAlertable`](#cdk-wakeful.IAlertable)

#### Methods <a name="Methods"></a>

##### `subscribeToAlarm` <a name="cdk-wakeful.IAlertable.subscribeToAlarm"></a>

```typescript
public subscribeToAlarm(alarm: Alarm)
```

###### `alarm`<sup>Required</sup> <a name="cdk-wakeful.IAlertable.parameter.alarm"></a>

- *Type:* [`aws-cdk-lib.aws_cloudwatch.Alarm`](#aws-cdk-lib.aws_cloudwatch.Alarm)

---


