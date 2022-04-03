// npm
const config = require('./config/config')
const express = require('express')
 
// routers
const profileRouter = require('./routes/profileRouter.route')
const sessionRouter = require('./routes/sessionRouter.route')
const loginRouter = require('./routes/loginRouter.route')
const logoutRouter = require('./routes/logoutRouter.route')
 
// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000
 
// config
config(app)
 
// routes
app.use('/profile', profileRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/session', sessionRouter)

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
