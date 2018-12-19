'use strict'
const API = process.argv.splice(3)[0].split('=')[1] || 'prod';

module.exports = {
  NODE_ENV: '"production"',
  API: `"${API}"`
}
