const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

router.route('/').post(async (req, res) => {
  const post = (status, message, data) => {
    return { status, message, data }
  }

  const { user_login, user_password } = req.body
  const user = await User.findOne({ where: { user_login }, raw: true })

  if (user) {
    const passCheck = await bcrypt.compare(user_password, user.user_password)

    if (passCheck) {
      req.session.user_data = user
      res.json(post(200, `Welcome back, ${user.user_login}!`, user))
    } else {
      res.json(post(400, 'Wrong password'))
    }
  } else {
    res.json(post(400, 'Wrong login'))
  }
})

module.exports = router
