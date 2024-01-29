require('dotenv').config()

const express = require('express')

const cors = require('cors')

// import router
const routes = require('./Routes/router')

const cartServer = express()

//importing mongoose
require('./DB/connection')

cartServer.use(cors())

cartServer.use(express.json())

cartServer.use(routes)

const PORT = 3000 || process.env.PORT

cartServer.listen(PORT,()=>{
    console.log('server running successfully');
})

cartServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:green">Cart server running successfully and waiting for client request</h1>`)
})

