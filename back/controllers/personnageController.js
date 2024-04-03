const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)



exports.updateSectionPersonnageById= async (req, res) =>{
    const idPersonnage= req.query.idPersonnage;
    const idSection= req.query.idSection;

    try{
        await models.Personnage.update(
            {section_actuelle: idSection},
            {where: {id: idPersonnage}}
    
        )
        res.status(200).json({message: 'Section du personnage mise à jour'})
    }
    catch(error){
        console.log('erreur lors de updateSectionPersonnageById: '+error)
        res.status(500).json({error: 'Erreur lors de la mise à jour de la section du personnage'})
    }


}