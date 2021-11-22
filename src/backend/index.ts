import { loadEnv, env } from './env'
loadEnv()

const express = require("express")
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport')
const OAuthStrategy = require('passport-oauth').OAuthStrategy
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy

type authJson = {
  oauth_token: string
  oauth_verifier: string
}
var app = express()
app.use(bodyParser.json())
app.use(cors())

app.set('port', process.env.PORT || 1235)

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use('provider', new OAuthStrategy({
    requestTokenURL: env.REQ_TKN_URL,
    accessTokenURL: env.ACS_TKN_URL,
    userAuthorizationURL: env.AUTH_URL,
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    // callbackURL: env.AUTH_URL
    callbackURL: 'http://0.0.0.0:1235/auth/provider/callback'
  },
  function(token: String, tokenSecret :String, profile :any, done :any) {
    if(token) {
      console.log(token)
      console.log(tokenSecret)
      console.log(profile)
    }
  }
))

passport.use('provider2', new OAuth2Strategy({
  authorizationURL: env.AUTH_URL,
  tokenURL: env.ACS_TKN_URL,
  clientID: env.OAUTH_TOKEN,
  clientSecret: env.OAUTH_TOKEN_SECRET,
  callbackURL: 'http://0.0.0.0:1235/test2'
},
function(token: String, tokenSecret :String, profile :any, done :any) {
  if(token) {
    console.log(token)
    console.log(tokenSecret)
    console.log(profile)
  }
}
));

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
  passport.authenticate('provider', { scope: 'auth/provider2' }, { session: true }, { successRedirect: env.AUTH_URL }, { failureRedirect: '/test' }),
  function(req: any, res: any) {
    res.redirect('/auth/provider/callback')
  })
app.get('/auth/provider/callback',
// TODO: redirect to authorize_path
  // passport.authenticate('provider2', { session: true }, { failureRedirect: '/test' }),

  function(req: any, res: any) {
    console.log(session)
    var json = JSON.stringify(res.socket.parser.socket._httpMessage.req.query, getCircularReplacer())
    var castJson = JSON.parse(json) as authJson
    res.send(castJson);
  })
app.get('/auth/provider2',
  passport.authenticate('provider2', { session: true }, { failureRedirect: '/test' }),

  function(req: any, res: any) {
    res.json( JSON.stringify(res, getCircularReplacer()));
  })
app.get('/test', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'Hello world!'
  })
})

app.get('/test2', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: JSON.stringify(session, getCircularReplacer())
  })
})

app.get('/test3', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'failed'
  })
})


app.listen(process.env.PORT || 1235)
