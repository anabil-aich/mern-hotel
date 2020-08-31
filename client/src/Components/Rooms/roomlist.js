import React from 'react'
import RoomBlock from '../RoomBlocks/roomblock'
import {Link} from 'react-router-dom'
import "./roomspage.css"

const Roomlist = (props)=>{
    console.log(props)
     let roomBlock;
    if(props.rooms.length === 0)
    {
        roomBlock = "No Rooms matched you searched criteria";
    }
    else
    {
        roomBlock = props.rooms.map((room)=>{
            return (<RoomBlock key={room._id} name={room.name} price={`${room.price} per night`}>
                        <Link to={`/rooms/${room._id}`}>Features</Link>
                    </RoomBlock>)
        })
   }

    return(
        <div className="roomlist-container">
        <div className="roomlist-roompage">
        {roomBlock}
        </div>

        </div>
    )
}

export default Roomlist
