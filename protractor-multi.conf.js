exports.config = {
  directConnect: true,
  specs: ['spec/*spec.js'],
  multiCapabilities: [
    {browserName: 'chrome'}, 
    {browserName: 'firefox'}
  ]
};
