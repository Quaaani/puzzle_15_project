const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('*** Session request! ***')

    const post = (status, message, data) => {
      return { status, message, data }
    }

    if (req.session.user_data) return res.json(post(200, 'Session active', req.session.user_data))
    return res.json(post(400, 'No session'))
  })

module.exports = router
