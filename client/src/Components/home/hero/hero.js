import React from 'react'
import {Link} from 'react-router-dom'
import "./hero.css"

const Home = () =>{
    return (<div>
      <div className="hero-section">
          <div className="overlay" />
          <div className="hero-content">
            <h1>Welcome to Comfy Stays!</h1>
            <div className="seperator"></div>
            <h3>Your comfortable stay is few clicks away</h3>
            <div className="gotoroom">
              <Link to="/rooms">Our Rooms</Link>
            </div>
            
          </div>
      </div>
    </div>)
}

export default Home;