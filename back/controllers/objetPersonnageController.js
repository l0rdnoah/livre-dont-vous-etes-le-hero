const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)


exports.addObjetToPersonnage = async (req, res) => {

    const idObjet= req.query.idObjet;
    const idPersonnage= req.query.idPersonnage;

    try {
        const existingAssociation = await models.Objet_Personnage.findOne({
            where: {
                id_personnage: idPersonnage,
                id_objet: idObjet
            }
        });
    
        
        if (existingAssociation) {
            return res.status(409).json({ message: 'Cette association existe déjà' });
        }
    
        
        await models.Objet_Personnage.create({
            id_personnage: idPersonnage,
            id_objet: idObjet
        });
    
        return res.status(200).json({ message: 'Objet ajouté au personnage' });
    } catch (error) {
        console.log('erreur lors de addObjetToPersonnage: ' + error);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'objet au personnage' });
    }
}



exports.deleteObjetFromPersonnage = async (req, res) => {

    const idObjet= req.query.idObjet;
    const idPersonnage= req.query.idPersonnage;


    try{
        await models.Objet_Personnage.destroy({
            where: {
                id_personnage: idPersonnage,
                id_objet: idObjet
            }
        })

        return res.status(200).json({message: 'Objet supprimé du personnage'})

    }
    catch(error){
        console.log('erreur lors de deleteObjetFromPersonnage: '+error)
        res.status(500).json({error: 'Erreur lors de la suppression de l\'objet du personnage'})
    }
}

exports.updateObjetsForPersonnage = async (req, res) => {
    const { idPersonnage, idsObjets } = req.body;

    try {
        
        await models.Objet_Personnage.destroy({
            where: {
                id_personnage: idPersonnage
            }
        });

        const nouvellesAssociations = idsObjets.map(idObjet => ({
            id_personnage: idPersonnage,
            id_objet: idObjet
        }));

        await models.Objet_Personnage.bulkCreate(nouvellesAssociations);

        return res.status(200).json({ message: 'Objets mis à jour pour le personnage' });
    } catch (error) {
        console.log('Erreur lors de la mise à jour des objets pour le personnage: ' + error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour des objets pour le personnage' });
    }
};