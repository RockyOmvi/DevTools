const jsonValidator = require('./json-validator.js');
const jwtDecoder = require('./jwt-decoder.js');
const regexTester = require('./regex-tester.js');
const { urlEncoder, urlDecoder } = require('./url-tools.js');
const cronGenerator = require('./cron-generator.js');
const uuidGenerator = require('./uuid-generator.js');
const { sha256Generator, md5Generator, hashGenerator } = require('./hash-tools.js');
const diffChecker = require('./diff-checker.js');
const apiTester = require('./api-tester.js');

module.exports = [
  jsonValidator,
  jwtDecoder,
  regexTester,
  urlEncoder,
  urlDecoder,
  cronGenerator,
  uuidGenerator,
  sha256Generator,
  md5Generator,
  hashGenerator,
  diffChecker,
  apiTester
];
