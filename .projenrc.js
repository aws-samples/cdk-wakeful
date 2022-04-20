const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'David Hessler',
  authorAddress: 'dhhessl@amazon.com',
  cdkVersion: '1.134.0',
  defaultReleaseBranch: 'main',
  name: 'CDKWakeful',
  repositoryUrl: 'https://github.com/dhhessl/CDKWakeful.git',
  license: 'MIT-0',
  python: {
    distName: 'cdk-wakeful',
    module: 'cdk_wakeful',
  },
  cdkDependencies: [
    '@aws-cdk/assertions',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-apigatewayv2-integrations',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-chatbot',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-cloudwatch-actions',
    '@aws-cdk/aws-dynamodb',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-elasticache',
    '@aws-cdk/aws-elasticloadbalancing',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-opensearchservice',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-stepfunctions',
    '@aws-cdk/aws-stepfunctions-tasks',
    '@aws-cdk/core',
  ],
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The 'name' in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.addGitIgnore('.idea');
project.synth();