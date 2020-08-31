import React from 'react'
import Hero from './hero/hero'
import Services from './services/services'
import HomeRoom from './home-room/home-room'

const Home = ()=>{

    return (
        <React.Fragment>
            <Hero /> 
            <Services />
            <HomeRoom/>
        </React.Fragment>
    )

}


export default Home;