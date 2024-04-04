const express=require('express')
const router=express.Router()
const  section= require('../controllers/sectionController')


router.get('/getallinfosectionbyid', section.getAllInfoSectionById);


module.exports=router