const OAuth = require('oauth').OAuth
const env = require('./env.js')

const oauth = new OAuth(
  env.prototype.schema.REQ_TKN_URL,
  env.prototype.schema.ACS_TKN_URL,
  env.prototype.schema.CONSUMER_KEY,
  env.prototype.schema.CONSUMER_SECRET,
  '1.0',
  '/test',
  'HMAC-SHA1'
)

describe('OAuth', () => {
  describe('#getOAuthRequestToken', () => {
    it('should return a request token', (done) => {
      oauth.get(
        env.prototype.schema.REQ_TKN_URL,
        env.prototype.schema.CONSUMER_KEY,
        env.prototype.schema.CONSUMER_SECRET,
        function (e, data, res) {
          if (e) console.error(e)
          console.log(require('util').inspect(data))
          done()
        })
    })
  })
})
