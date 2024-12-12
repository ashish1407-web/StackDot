const express = require('express')
const bodyParser = require('body-parser')
const registerRoute=require('../project/route/registrationRoutes')

const app=express()
const PORT=3000

app.use(bodyParser.json())

app.use('/app/v1/registration',registerRoute)
app.use((err,req,res,bext)=>{
    console.log(err.stack)
    res.status(500).json({error:"Something went wrong..."})
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
