const express=require('express')
const router=express.Router()
const  personnage= require('../controllers/personnageController')


router.get('/updatesectionpersonnagebyid', personnage.updateSectionPersonnageById);

router.get('/creerpersonnage', personnage.creerPersonnage);

router.get('/:id/getPersonnageById', personnage.getPersonnageById)

module.exports=router