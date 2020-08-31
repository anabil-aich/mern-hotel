import React from 'react'
import "./roomhero.css"

const RoomHero = ({children, roomtype, roomdesc})=>{
    
    return (<div>
                <div className="room-hero-section">
                    {roomtype === undefined || roomtype === `OurRooms`? <img src={require(`../../Images/OurRooms.jpeg`)} /> : <img src={require(`../../Images/${roomtype.replace(" ","")}.jpeg`)} />}
                    
                    <div className="overlay" />
                    <div className="room-hero-content">
                    <h1>{roomtype}</h1>
                    <div className="seperator"></div>
                    <h3>{roomdesc}</h3>
                    <div className="room-gotoLink">
                        {children}
                    </div>
                    
                    </div>
                </div>
            </div>)
}

export default RoomHero