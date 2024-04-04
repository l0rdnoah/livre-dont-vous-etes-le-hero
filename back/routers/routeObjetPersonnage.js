const express=require('express')
const router=express.Router()
const  objetPersonnage= require('../controllers/objetPersonnageController')


router.get('/addObjetToPersonnage', objetPersonnage.addObjetToPersonnage)
router.get('/deleteObjetFromPersonnage', objetPersonnage.deleteObjetFromPersonnage)

module.exports=router