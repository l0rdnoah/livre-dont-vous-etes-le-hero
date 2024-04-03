const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)



exports.getAllInfoSectionById= async (req, res) =>{

    //Id de la section passé en paramètre
    const idSection= req.query.idSection;

    try{


        // let reponse2= await models.Section.findAll({

        //     where:{id: idSection},

        //     include: [
        //         { model: models.Choix, as: 'section_depart_Choixes' }, // on inclu sur la clé secition depart
        //         {model: models.Combat, as: 'Combats', 
        //             include: [ {model: models.Enemi, as: 'id_enemi_Enemis'}],
        //             include: [ {model: models.Condition_Combat, as: 'Condition_Combats'}]

        //         },
        //         {model: models.Enigme, as: 'section_depart_Enigmes'},
                

        //     ]
    
        // })

        let reponse = await models.Section.findAll({
            where: { id: idSection },
            include: [
                { 
                    model: models.Choix, 
                    as: 'section_depart_Choixes' 
                },
                { 
                    model: models.Combat, 
                    as: 'Combats', 
                    include: [ 
                        { 
                            model: models.Enemi, 
                            as: 'id_enemi_Enemis' 
                        },
                        { 
                            model: models.Condition_Combat, 
                            as: 'Condition_Combats' 
                        }
                    ]
                },
                { 
                    model: models.Enigme, 
                    as: 'section_depart_Enigmes' 
                }
            ]
        });
        

        return res.json(reponse);

    }
    catch(error){
        console.log('error in getAllInfoSectionById: ', error)
        throw error;
    }

}