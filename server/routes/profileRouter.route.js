const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

router.route('/').post(async (req, res) => {
  const { user_login, user_password } = req.body;
  const user = await User.findOne({ where: { user_login } });

  const post = (status, message, data) => {
    return { status, message, data };
  };

  if (user || user_password.length < 8) {
    return res.status(400).json({ message: 'Login or Password invalid' });
  }

  const newPassword = await bcrypt.hash(user_password, 10);
  req.body.user_password = newPassword;
  const newUser = await User.create(req.body);

  req.session.user_data = newUser.dataValues;

  return res.status(201).json({ data: newUser.dataValues });
});

module.exports = router;
