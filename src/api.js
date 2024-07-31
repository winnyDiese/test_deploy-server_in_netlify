
const express = require('express')
const serverless = require('serverless')

const app = express()

const router = express.Router()
router.get('/', (req,res)=>{
    res.json({'hello':'hi'})
})

app.get('/.netlify/functions/api',router)

module.exports.handle = serverless(app)
