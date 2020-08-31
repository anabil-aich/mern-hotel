import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RoomHero from '../RoomHero/roomhero'
import { Link } from 'react-router-dom'
import "./singleroom.css"

const SingleRoom = (props) =>{

    const [room, setRoom] = useState({})


    const getSignleRoom = (roomid)=>{
        axios.get(`https://mern-hotel.herokuapp.com/rooms/room/?roomid=${roomid}`)
        .then((response)=>{
            console.log(response.data.extras)
         setRoom({
            ...room,
            ...response.data
         }) 
         
        })
        .catch((error)=>{
            console.log(error)
        }) 
    }

    useEffect(()=>{
        getSignleRoom(props.computedMatch.params["roomid"])

    },[])

    
    return ( 
        <>
        <RoomHero roomtype={room.name} 
                  roomdesc={""}> 
                <Link to="/rooms">
                    Go back to Rooms
                </Link>
        </RoomHero>
        <div className="single-room">
            <div className="single-room-images">
                <div className="img">
                    <img src={require('../../Images/details-1.jpeg')} alt="sample pic"/>
                </div>
                <div className="img">
                <img src={require('../../Images/details-2.jpeg')} alt="sample pic"/>
                </div>
                <div className="img">
                <img src={require('../../Images/details-3.jpeg')} alt="sample pic"/>
                </div>
            </div>
            <div className="roomFeatures">
                <div className="roomDetails">
                    <h2>details</h2>
                    <p>
                        {room.description}
                        </p>
                </div>
                <div className="roomInfo">
                    <h2>info</h2>
                    <ul>
                        <li>price : ${room.price}</li>
                        <li>size : ${room.size} SQFT</li>
                        <li>max capacity :{room.capacity > 1 ? `${room.capacity} persons` : `${room.capacity} person`} </li>
                        <li>{room.pets?`Pets allowed`: `No pets allowed`}</li>
                        <li>{room.breakfast && `Breakfast included`}</li>
                    </ul>
                </div>
            </div>
            <div className="roomExtras">
                <h2>extras</h2>
                <ul>
                    {room.extras && room.extras.length > 0 ? 
                        room.extras.map((value, index)=>{
                        return (<li key={index}>- {value}</li>)
                        })
                    : `Loading.....`}
                </ul>
            </div>
        </div> 
        
        </>
    )
}

export default SingleRoom;