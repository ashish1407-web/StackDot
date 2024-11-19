const express=require('express')
const router=express.Router()
const {
    getInstituteTypes,getSchooleDetails,getStanderdAndSubject,getCollageDetails,getExamDetails,submitFormRegistration,getAllRegistration
}=require('../cotrollers/registrationController')


router.get('/institue-types',getInstituteTypes)
router.get('/schoole--details',getSchooleDetails)
router.get('/standerdAndSubject',getStanderdAndSubject)
router.get('/collage-details',getCollageDetails)
router.get('/exam-details',getExamDetails)
router.post('/registers',submitFormRegistration)
router.get('/registrations',getAllRegistration)
 
//http://localhost:3000/app/v1/registration/{routePath-final from this file}}

module.exports = router