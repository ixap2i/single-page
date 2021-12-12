const env = require('./env.js')
const uuid = require('uuid')
const signLib = require('oauth-sign')

const composeAuthHeader = function (verifier) {
  const t = Date()
  const todayToInt = new Date(t).getTime()

  const headerParams = `oauth_consumer_key="${encodeURIComponent(env.prototype.schema.CONSUMER_SECRET)}", oauth_nonce="${uuid.v4()}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${todayToInt}", oauth_token="${env.prototype.schema.OAUTH_TOKEN_SECRET}", oauth_verifier="${verifier}", oauth_version="1.0"`
  console.log(encodeURIComponent(env.prototype.schema.CONSUMER_SECRET))
  console.log(headerParams)
  const sign = signLib.sign('HMAC-SHA256', 'GET', 'http://n.hatena.com/applications/my.json', headerParams, env.prototype.schema.CONSUMER_SECRET, env.prototype.schema.OAUTH_TOKEN_SECRET)
  console.log(sign)
  // const requestParams = `oauth_consumer_key="${env.prototype.schema.CONSUMER_SECRET}", oauth_nonce="${uuid.v4()}", oauth_signature_method="HMAC-SHA1", oauth_signature="${sign}", oauth_timestamp="${todayToInt}", oauth_token="${env.prototype.schema.OAUTH_TOKEN_SECRET}", oauth_verifier="${verifier}", oauth_version="1.0"`

  // oauth_consumer_key="q7JnhZ3Hk8a%2FlQ%3D%3D",
  //   oauth_nonce="e3fcb9046a7b67a2f135",
  //   oauth_signature="gUXzVjtGaYBC%2BIguh2cf56Id%2BdY%3D",
  //   oauth_signature_method="HMAC-SHA1",
  //   oauth_timestamp="1291692652",
  //   oauth_token="dRsM%2BQcOhiQcow%3D%3D",
  //   oauth_version="1.0"
}
// TODO: fix this
// composeAuthHeader()
