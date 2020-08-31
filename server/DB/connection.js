require('dotenv').config()

const mongoose = require('mongoose')


mongoose.connect(process.env.URI,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})


mongoose.connection.once('open', ()=>{
    console.log(`connected to DB`)
})


mongoose.connection.on('error', ()=>{
    console.log(`Something went wrong while connecting to the DB`)
})

module.exports = mongoose