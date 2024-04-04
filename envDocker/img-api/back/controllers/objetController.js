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
                as: 'id_objet_Objet', // Assurez-vous que cet alias correspond à celui défini dans vos associations
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            }]
        });
  
        if (!objets) {
            return res.status(404).send('Objets not found for this personnage');
        }

        // Afficher les résultats pour vérification
        console.log(objets);

        // La logique pour extraire les objets correctement dépend de la structure de vos données
        // Assurez-vous que vous accédez aux données de la manière appropriée
        const objetsList = objets.map(item => item.id_objet_Objet); // Ajustez selon la structure réelle

        return res.json(objetsList);
      
    } catch (error) {
      console.error('Error fetching objects for character:', error);
      res.status(500).send('Server error');
    }
    
    
};