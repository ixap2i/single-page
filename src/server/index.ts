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

const request = require('request')
const requestOptionForEmb = require('./requestOption')

var app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('port', process.env.PORT || 1235)

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use('provider', new OAuthStrategy({
    requestTokenURL: env.REQ_TKN_URL,
    accessTokenURL: env.ACS_TKN_URL,
    userAuthorizationURL: env.AUTH_URL,
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    callbackURL: '/test'
  },
  function(token: any, tokenSecret: any, profile: any, cb: any) {
    return cb(null, profile)

  }
))

passport.use('hatena', new HatenaStrategy({
  consumerKey: env.CONSUMER_KEY,
  consumerSecret: env.CONSUMER_SECRET,
  callbackURL: "/test"
},
function(token:any, tokenSecret:any, profile:any, done:any) {
  process.nextTick(function () {
    return done(null, profile);
  });
}))

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
  passport.authenticate('hatena', { scope: ['read_public', 'write_public'] }),
  function(req: any, res: any){
    // The request will be redirected to Hatena for authentication, so this
    // function will not be called.
    res.redirect('/test')

  });

app.get('/getEmbedObj', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  request(requestOptionForEmb.options, function(error :any, response :any, body :any) {
    // TODO: error handling
    res.send(body)
  });
})

app.listen(process.env.PORT || 1235)
