exports.config = {
  directConnect: true,
  specs: ['spec/*spec.js'],
  maxSessions: 4,
  capabilities: {
    browserName: 'chrome',
    maxInstances: 4,
    shardTestFiles: true
  }
};
