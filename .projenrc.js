const { awscdk, github } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'David Hessler',
  authorAddress: 'dhhessl@amazon.com',
  cdkVersion: '2.20.0',
  defaultReleaseBranch: 'main',
  gitignore: ['.DS_Store'],
  name: 'cdk-wakeful',
  repositoryUrl: 'https://github.com/aws-samples/cdk-wakeful',
  license: 'MIT-0',
  python: {
    distName: 'cdk-wakeful',
    module: 'cdk_wakeful',
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['dependabot[bot]', 'davidhessler'],
  },
  autoMerge: true,
  autoMergeOptions: {
    allowedUsernames: 'dependabot[bot]',
  },
  github: true,
  release: false,
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The 'name' in package.json. */
});
project.addGitIgnore('.idea');
project.synth();