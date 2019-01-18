const utils = require('../build/utils')
'use strict'
const args = '?' + process.argv.slice(3).join('&');
const API = utils.getQueryByName('API', args);
module.exports = {
  NODE_ENV: '"production"',
  API: `"${API}"`
}
