const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('*** Session request! ***')

    if (!req.session.user_data) {
      console.log('no session ')
      return res.status(400).json({ message: 'No session' })
    }

    return res.status(200).json({ message: 'Session started', data: req.session.user_data })
  })

module.exports = router
