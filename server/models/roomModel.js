const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name : {
        type : String,
        reqired : true
    },
    param : {
        type : String,
        reqired : true
    },
    type : {
        type : String,
        reqired : true
    },
    price : {
        type : Number,
        reqired : true
    },
    size :{
        type : Number,
        required : true
    },
    capacity : {
        type : Number,
        reqired : true
    },
    pets : {
        type : Boolean,
        reqired : true
    },
    breakfast :{
        type : Boolean,
        required : true
    },
    featured : {
        type : Boolean,
        reqired : true
    },
    description : {
        type : String,
        reqired : true
    },
    extras :{
        type : [String],
        required : true
    }
})


roomSchema.statics.getRoombyId = async function (roomid){
    try{
        const room = await this.model('Rooms').findOne({
            _id : roomid
        })
    
        return room
    }
    catch{
        return null
    }
}

roomSchema.statics.getFeaturedRoom = async function(){
    try{
        const fRooms = await this.model('Rooms').find({
            featured : true
        })

        return fRooms
    }
    catch{
        return null
    }
}


const roomModel = mongoose.model('Rooms',roomSchema)

module.exports = roomModel