const express=require('express')
const router=express.Router()
const  test= require('../controllers/UtilisateurController')

router.post('/inscription', test.inscription);

router.get('/:id/personnages', test.personnages)

router.post('/connexion', test.connexion)

module.exports=router