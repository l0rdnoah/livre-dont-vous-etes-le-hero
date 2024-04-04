const express=require('express')
const router=express.Router()
const  objet= require('../controllers/objetController')

router.get('/:id/getObjetsByPersonnageId', objet.getObjetsByPersonnageId)

module.exports=router 