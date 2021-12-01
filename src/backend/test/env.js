const load = require('ts-dotenv')
const EnvType = require('ts-dotenv')

function env () {}
env.prototype.loadEnv = function () {
  var env = new EnvType(env.prototype.schema)
  env = load(schema)
}
env.prototype.schema = {
  NODE_ENV: 'test',
  REQ_TKN_URL: 'https://www.hatena.com/oauth/initiate',
  ACS_TKN_URL: 'https://www.hatena.com/oauth/token',
  AUTH_URL: 'https://www.hatena.ne.jp/oauth/authorize',
  CONSUMER_KEY: 'Wmy7vBtofdZO0w==',
  CONSUMER_SECRET: '8rRFu2OE0WzG3QCB5CI5P15ukYU=',
  OAUTH_TOKEN: '9HUXqZGsYFC1IA==',
  OAUTH_TOKEN_SECRET: '8ErzAbZ63FyNaUegSm6JHOaV'
}
module.exports = env
