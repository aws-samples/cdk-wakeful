const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'David Hessler',
  authorAddress: 'dhhessl@amazon.com',
  cdkVersion: '2.20.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-wakeful',
  repositoryUrl: 'https://github.com/aws-samples/cdk-wakeful',
  license: 'MIT-0',
  python: {
    distName: 'cdk-wakeful',
    module: 'cdk_wakeful',
  },
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The 'name' in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.addGitIgnore('.idea');
project.synth();