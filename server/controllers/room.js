const mongoose = require('mongoose')
const Room = mongoose.model('Rooms')


exports.getAllRooms = async (req, res)=>{
    try
    {
        const rooms = await Room.find({})
        res.status(200).send(rooms)
    }
    catch(e){
        res.status(500).send(e.message)
    }

}

exports.getFeaturedRoom = async (req, res) =>{
    try{
        const frooms = await Room.getFeaturedRoom()
        if(!frooms)
        {
            throw new Error("no featured room")
        }
        res.status(200).send(frooms)
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.getRoom = async (req, res) =>{
    try{
        console.log(req.query)
        const room = await Room.getRoombyId(req.query.roomid)
        if(!room)
        {
            throw new Error("Room not found")
        }
        res.status(200).send(room)
        
    }
    catch(e){
        res.status(500).send(e)
    }
}


exports.addRoom = async(req, res) =>{
    console.log(req)
    try{
        const newRoom = new Room(req.body)

        await newRoom.save()

        res.status(200).send("Room created")
    }
    catch(e){
        res.status(500).send(e)
    }
}