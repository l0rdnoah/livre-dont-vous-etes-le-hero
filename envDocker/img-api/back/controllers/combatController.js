

const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)



exports.getAllInfoCombatById= async (req, res) =>{

    const idCombat= req.query.idCombat;

    try{
        let reponse= await models.Combat.findAll({

            where : {id: idCombat},

            include: [
                {model: models.Enemi, as: 'id_enemi_Enemis'},
                {model: models.Condition_Combat, as: 'Condition_Combats'}
            ]
        })

        return res.json(reponse)
    }
    catch(error){
        console.log('Erreur lors de getAllInfoCombatById: '+error)
        res.status(500).json({error: 'Erreur lors de la récupération des informations du combat'})
        throw error
    }
}