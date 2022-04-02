// npm
const config = require('./config/config')
const express = require('express')
 
// routers

 
// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000
 
// config
config(app)
 
// routes
 

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
