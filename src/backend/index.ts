import { loadEnv, env } from './env'
loadEnv()

const express = require("express")
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport')
const OAuthStrategy = require('passport-oauth').OAuthStrategy

var app = express()

app.use(bodyParser.json())
app.use(cors())
app.set('port', process.env.PORT || 1234)
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

passport.use('provider', new OAuthStrategy({
    requestTokenURL: env.REQ_TKN_URL,
    accessTokenURL: env.ACS_TKN_URL,
    userAuthorizationURL: env.AUTH_URL,
    consumerKey: env.CONSUMER_KEY,
    consumerSecret: env.CONSUMER_SECRET,
    callbackURL: 'http://0.0.0.0:1234/auth/provider/callback'
  },
  function(token :String, tokenSecret :String, profile :any, done :any) {
    console.log('profile', profile)
    done(null, profile)
  }
))

app.get('/auth/provider', passport.authenticate('provider'))
app.get('/auth/provider/callback', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'call back'
  })
})

app.get('/test', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'Hello world!'
  })
})

app.get('/test2', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'success'
  })
})

app.get('/test3', function(req: any, res: { send: (arg0: { message: string }) => void }) {
  res.send({
    message: 'failed'
  })
})


app.listen(process.env.PORT || 1234)
