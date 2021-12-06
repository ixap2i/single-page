const expect = require('chai').expect
const request = require('request')
const options = {
  method: 'GET',
  json: true,
  url: 'http://hatenablog.com/oembed?url=https://letterneginr.hateblo.jp/entry/2021/07/22/081119&format=json'
}
describe('oemb', () => {
  describe('#getEmbedEntry', () => {
    it('should return a request token', (done) => {
      request(options, function (err, res, body) {
        console.log(body)
        done()
        expect(res.statusCode).to.equal(200)
      })
    })
  })
})
