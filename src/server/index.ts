import { loadEnv, env } from './env'
loadEnv()

const express = require("express")
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport')
const OAuthStrategy = require('passport-oauth').OAuthStrategy
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy
const HatenaStrategy = require('passport-hatena').Strategy
const signLib = require('oauth-sign')
const uuid = require('uuid')

const request = require('request')
const requestOptionForEmb = require('./requestOption')
export const options = {
  method: 'GET',
  json: true,
  url: "http://n.hatena.com/applications/my.json",
  headers: {
    Authorization: `OAuth realm="" `
  }
}

var app = express()
app.use(passport.initialize());
app.use(bodyParser.json())
app.use(cors())

app.set('port', process.env.PORT || 1235)

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 1000, secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

const v4 = uuid.v4()
const t = Date()
const todayToInt = new Date(t).getTime()

const oauth = new OAuthStrategy({
  requestTokenURL: env.REQ_TKN_URL,
  accessTokenURL: env.ACS_TKN_URL,
  userAuthorizationURL: env.AUTH_URL,
  consumerKey: env.CONSUMER_KEY,
  consumerSecret: env.CONSUMER_SECRET,
  callbackURL: '/verifiedCallback'
},
function(token: any, tokenSecret: any, profile: any, done: any) {
  return done(null, profile)
})

passport.use('provider', oauth)
  function done() {
    console.log('done')
    console.log(`${JSON.stringify(hatenaSt)}`)
    console.log(JSON.stringify(hatenaSt.requestTokenParams, getCircularReplacer()))
  }
  const hatenaSt = new HatenaStrategy({
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    callbackURL: "/verifiedCallback"
  },
  function(token:any, tokenSecret:any, profile:any, done:any) {
    // リダイレクトに成功した場合呼ばれない
    console.log('done!')
    return hatenaSt.userProfile (token, tokenSecret, {}, done)
  })

passport.use('hatena', hatenaSt)

const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  };
};

app.get('/auth/provider',
  passport.authenticate('provider', { successRedirect: '/test',
  failureRedirect: '/login' }, { scope: ['read_public', 'write_public'] }),
  function(req: any, res: any) {
    // The request will be redirected to Hatena for authentication, so this
    // function will not be called.
    res.json({ id: req.user.id, username: req.user.username });
  });

let requestedVerifiers = ''

const composeAuthHeader = function (tokenSecret: string, verifier: string, v4: string, today: number): string {
  const headerParams = `oauth_consumer_key="${env.CONSUMER_SECRET}", oauth_nonce="${v4}", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${todayToInt}", oauth_token="${decodeURIComponent(tokenSecret)}", oauth_verifier="${decodeURIComponent(verifier)}", oauth_version="1.0"`
  const sign = signLib.sign('HMAC-SHA256', 'GET', 'http://n.hatena.com/applications/my.json', headerParams, env.CONSUMER_SECRET, tokenSecret)
  return sign
}

app.get('/verifiedCallback', function(req: any, res: any) {
    requestedVerifiers = JSON.stringify(req._parsedOriginalUrl.path, getCircularReplacer())
    let tokens = requestedVerifiers.substr(requestedVerifiers.indexOf('?') + 1).split('&')
    let tokenArr = tokens.map((el)=>{let idx = el.indexOf('='); return el.substr(requestedVerifiers.indexOf('?') + 1)})
    let onlyVal = tokenArr.map((el)=>{return el.substr(el.indexOf('=') + 1)})
    options.headers.Authorization = `OAuth realm="", ` + `oauth_consumer_key="${env.CONSUMER_KEY}",`+ `oauth_nonce="${v4}",` + `oauth_signature="${composeAuthHeader(onlyVal[0], onlyVal[1].replace('"', ''), v4, todayToInt)}",` + `oauth_signature_method="HMAC-SHA1",` + `oauth_timestamp="${todayToInt}",` + `oauth_token="${decodeURIComponent(onlyVal[0])}",` + `oauth_verifier="${decodeURIComponent(onlyVal[1].replace('"', ''))}",` + `oauth_version="1.0"`

    request(options, function(error: any, response: any, body: any) {
      // TODO: error handling
      if(error) {
        console.log(error)
      } else {
        console.log(response.status)
        console.log(response.body)
      }
    });

})
app.get('/login', function(req: any, res: any) {
  res.json({ message: res })

})
app.get('/getEmbedObj', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  request(requestOptionForEmb.options, function(error: any, response: any, body: any) {
    // TODO: error handling
    res.send(body)
  });
})

// const puppeteer = require('puppeteer');

// app.get('/ppverifiedCallback', function(req: any, res: { send: (arg0: { message: string }) => void }) {
//   (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://letterneginr.hateblo.jp/');
//     await page.waitForSelector('a')
//     let element = await page.$('a')
//     let value = await page.evaluate((el: { textContent: any }) => el.textContent, element)
//     console.log(value)
//   })();
// })

app.listen(process.env.PORT || 1235)
