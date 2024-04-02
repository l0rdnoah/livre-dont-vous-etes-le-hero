const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)


exports.moussaillon = async (req, res) => res.json(
    await models.Section.findAll()
)


