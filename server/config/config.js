require('dotenv').config();
const express = require('express')
// const cors = require('cors');
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionConfig = require('./sessionConfig')
 
const config = (app) => { 
 // use
 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))
 app.use(express.static(path.join(process.env.PWD, 'public')))
//  app.use(cors())
 
 // session
 app.use(cookieParser())
 app.use(session(sessionConfig))
}
 
module.exports = config
