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




exports.creerPersonnage = async (req, res) => {
    //On récupère les données du formulaire
    const id_utilisateur= req.query.idUtilisateur;
    const section_actuelle=1; // on le met à la section 1 au début
    const nom= req.query.nom;
    const habilite= req.query.habilite;
    const endurance= req.query.endurance;
    const po=8;
    const modif_degats=req.query.modifDegats;
    const endurance_max= req.query.enduranceMax;
    console.log('endurance_max: '+endurance_max)
    console.log('req.query',req.query)

    try{
        //on crée le perso
        const personnage=await models.Personnage.create({
            id_utilisateur,
            section_actuelle,
            nom,
            habilite,
            endurance,
            po,
            modif_degats,
            'endurance_max ': endurance_max // dans le model cette colonne est avec des '' car il y a un espace à la fin
        })

        console.log('personnage créé: '+personnage)

        //On lui ajoute les objets

        await models.Objet_Personnage.create({
            id_personnage: personnage.id, // on met l'id du perso qui vient d'être créé
            id_objet: 1 //Poignard
        })

        await models.Objet_Personnage.create({
            id_personnage: personnage.id, // on met l'id du perso qui vient d'être créé
            id_objet: 2 //Epee
        })

        await models.Objet_Personnage.create({
            id_personnage: personnage.id, // on met l'id du perso qui vient d'être créé
            id_objet: 3 //Armure légère
        })

        await models.Objet_Personnage.create({
            id_personnage: personnage.id, // on met l'id du perso qui vient d'être créé
            id_objet: 4 //Gourde d'eau
        })

        res.status(200).json({message: 'Personnage créé avec succès', personnageId : personnage.id})
    }
    catch(error){
        console.log('erreur lors de creerPersonnage: '+error)
        res.status(500).json({error: 'Erreur lors de la création du personnage'})
    }

}

exports.getPersonnageById = async (req, res) => {
    const { id } = req.params;

    try {
        const personnage = await models.Personnage.findByPk(id, {
            attributes: { exclude: ['createdAt', 'updatedAt'] } // Excluez ou incluez des attributs selon les besoins
        });

        if (!personnage) {
            return res.status(404).send('Personnage not found');
        }

        res.json(personnage);
    } catch (error) {
        console.error('Error fetching character:', error);
        res.status(500).send('Server error');
    }
};