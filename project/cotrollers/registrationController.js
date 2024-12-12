const { instituteTypes,boards,mediums,classCategories,subject,universities,degree,exam}= require('../models/institueModel')
let registration=[]
const getInstituteTypes=(req,res)=>{
    res.json(instituteTypes)
}

const getSchooleDetails=(req,res)=>{
    res.json(boards,mediums,classCategories)
}

const getStanderdAndSubject=(req,res)=>{
    const {classCategoriestypes}= req.query;

    if(!classCategories[classCategoriestypes]){
        return res.status(400).json({error:"Invalid Class category"})
    }
    const standerdss=classCategories[classCategoriestypes]
    const responce=standerdss.map((standerd)=>({
        standerd,subjects:subject[subject] ||[]
    }))
    res.json({standerdss:responce})
}
const getCollageDetails=(req,res)=>{
    res.json({universities,degree})
}

const getExamDetails=(req,res)=>{
    res.json({exam})
}

const submitFormRegistration=(req,res)=>{
    const registrationData=req.body

    if(!registrationData.instituteTypes){
        return res.status(400).json({error:'Institute type is required'})
    }
    registration.push({registrationData})
    res.status(201).json({message:"Registration successfully done",data:registrationData})
}

const getAllRegistration=(req,res)=>{
    res.json(registration)
}

module.exports={
    getInstituteTypes,getSchooleDetails,getStanderdAndSubject,getCollageDetails,getExamDetails,submitFormRegistration,getAllRegistration
}