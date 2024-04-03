const express=require('express')
const router=express.Router()
const  combat= require('../controllers/combatController')


router.get('/getallinfocombatbyid', combat.getAllInfoCombatById);


module.exports=router