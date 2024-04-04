const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)

exports.getObjetsByPersonnageId = async (req, res) => {
    
    const { id } = req.params;
  
    try {
        const objets = await models.Objet_Personnage.findAll({
            where: { id_personnage: id },
            include: [{
                model: models.Objet,
                as: 'id_objet_Objet', 
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }]
        });
  
        if (!objets) {
            return res.status(404).send('Objets not found for this personnage');
        }

        
        console.log(objets);


        const objetsList = objets.map(item => item.id_objet_Objet); 

        return res.json(objetsList);
      
    } catch (error) {
      console.error('Error fetching objects for character:', error);
      res.status(500).send('Server error');
    }
    
    
};


exports.getAllInfoObjetById = async (req, res) => {
    const idObjet= req.query.idObjet;

    try{
        const reponse= await models.Objet.findByPk(idObjet, {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

        return res.json(reponse);

    }
    catch(error){
        console.log('erreur lors de getAllInfoObjetById: '+error)
        res.status(500).json({error: 'Erreur lors de la récupération des infos de l\'objet'})
    }
}