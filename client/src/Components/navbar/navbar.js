import React from 'react'
import {NavLink} from 'react-router-dom'
import "./navbar.css"


const MyNavbar = () =>{
    return (
    <div className="nav-bar"> 
        <nav>
            <div className="nav-header"><h4><i>Comfy Stays</i></h4></div>
            <ul className="nav-links">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/rooms">Rooms</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </div>
  )
}

export default MyNavbar