const express = require('express')
var cors = require('cors')
require('dotenv').config()


require('./DB/connection')
require('./models/roomModel')
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())



app.use('/rooms', require('./routes/room'))
app.use('/', async (req, res)=>{
    res.status(200).send("Welcome to hotel default page")
})

app.listen(port,()=>{
    console.log(`Server is up and running in ${port}`)
})