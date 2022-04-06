const router = require('express').Router()
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

router.route('/').post(async (req, res) => {
  const { user_login, user_password } = req.body
  const user = await User.findOne({ where: { user_login }, raw: true })

  if (!user) {
    return res.status(400).json({ message: 'Wrong data' })
  }

  const passCheck = await bcrypt.compare(user_password, user.user_password)

  if (!passCheck) {
    return res.status(400).json({ message: 'Wrong data' })
  }

  req.session.user_data = user
  return res.status(200).json({ data: user })
})

module.exports = router
