const sequelize= require('../database/database')
const initModels= require('../models/init-models')

let models= initModels(sequelize)



exports.getAllInfoSectionById= async (req, res) =>{

    //Id de la section passé en paramètre
    const idSection= req.query.idSection;




    

    try{

        if (!idSection) { // si l'id de section n'est pas passé en paramètre on renvoie la section 1
            let reponse= await models.Section.findAll({
                where: { id: 1 },
                include: [
                    { 
                        model: models.Choix, 
                        as: 'section_depart_Choixes', 
                        include: [
                            {
                                model: models.Condition_Choix,
                                as: 'Condition_Choixes'
                            }
                        ]
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

        else{ // si on a un id de section passé en paramètre
            reponse = await models.Section.findAll({
                where: { id: idSection },
                include: [
                    { 
                        model: models.Choix, 
                        as: 'section_depart_Choixes', 
                        include: [
                            {
                                model: models.Condition_Choix,
                                as: 'Condition_Choixes'
                            }
                        ] 
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
    
            if (reponse.length === 0) { // si la section passé en paramètre n'existe pas on renvoie la section 1
                reponse= await models.Section.findAll({
                    where: { id: 1 },
                    include: [
                        { 
                            model: models.Choix, 
                            as: 'section_depart_Choixes', 
                            include: [
                                {
                                    model: models.Condition_Choix,
                                    as: 'Condition_Choixes'
                                }
                            ] 
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
            else{
    
                return res.json(reponse);
    
            }
        }



        
        
        

        

    }
    catch(error){
        console.log('error in getAllInfoSectionById: ', error)
        throw error;
    }

}