const jsonValidator = require('./json-validator.js');
const jwtDecoder = require('./jwt-decoder.js');
const regexTester = require('./regex-tester.js');
const { urlEncoder, urlDecoder } = require('./url-tools.js');
const cronGenerator = require('./cron-generator.js');
const uuidGenerator = require('./uuid-generator.js');
const { sha256Generator, md5Generator, hashGenerator } = require('./hash-tools.js');
const diffChecker = require('./diff-checker.js');
const apiTester = require('./api-tester.js');
const epochConverter = require('./epoch-converter.js');
const base64Tools = require('./base64-tools.js');
const jsonToTypes = require('./json-to-types.js');

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
  apiTester,
  epochConverter,
  base64Tools,
  jsonToTypes
];

