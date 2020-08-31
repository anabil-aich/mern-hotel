import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./home-room.css"
import RoomBlock from '../../RoomBlocks/roomblock'
import { Link } from 'react-router-dom'



const HomeRoom = ()=>{

        const [fetRooms, setFetRooms] = useState([])
        const getFeaturedRooms = ()=>{
            axios.get('https://mern-hotel.herokuapp.com/rooms/featuredroom')
            .then((response)=>{
                setFetRooms(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        useEffect(()=>{
            getFeaturedRooms();
        },[])

        let roomBlock;
        if(fetRooms.length === 0)
        {
            roomBlock = "Loading....";
        }
        else
        {
            roomBlock = fetRooms.map((room)=>{
                return (<RoomBlock key={room._id} name={room.name} price={`${room.price} per night`}>
                            <Link to={`/rooms/${room._id}`}>Features</Link>
                        </RoomBlock>)
            })
        }
        return (
            <div className="home-room-container">
                <div className="home-room-header">
                    <h2>
                        Our Featured Rooms 
                    </h2>
                </div>
                <div className="seperator" />
                <div className="home-room-rooms">
                    {
                       roomBlock
                    }
                    
                </div>
            </div>
        )
    
    
}

export default HomeRoom