const router = require('express').Router()
const { Game, Save } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    const user_id = req.session.user_data.id
    const save = await Save.findOne({ where: { user_id }, raw: true })

    if (save) {
      const game = await Game.findByPk(save.game_id, { raw: true })
      return res.status(200).json(game)
    }

    return res.status(400).json({ message: 'No saved games' })
  })
  .post(async (req, res) => {
    const user_id = req.session.user_data.id
    const { game_board, game_moves } = req.body

    await Game.destroy({ where: { game_board, game_moves }})

    const board = await Game.create(req.body)
    const game_id = board.dataValues.id

    await Save.destroy({ where: { user_id } })
    await Save.create({ user_id, game_id })

    return res.status(200).json({ message: 'Game saved!' })
  })

module.exports = router
