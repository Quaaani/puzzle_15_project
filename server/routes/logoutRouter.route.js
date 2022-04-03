const router = require('express').Router()

router.route('/').get((req, res) => {
  console.log('*** Session destroyed ***')
  req.session.destroy()
  res.json({ status: 200, message: 'Session destroyed'})
})

module.exports = router
