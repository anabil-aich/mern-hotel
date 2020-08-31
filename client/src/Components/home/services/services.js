import React, {useState} from 'react'
import './services.css'
import { FaBeer, FaBus, FaGlassCheers, FaSwimmingPool } from 'react-icons/fa';



const Services = ()=>{

    const [services] = useState([
      {
          icon : <FaBeer size={44} />,
          title : "Free Drinks",
          desc : "You get a drink free with every two consecutive drinks that you order"
      },
      {
        icon : <FaBus size={44} />,
        title : "Free Shuttle",
        desc : "Shuttles will be provided free of cost for airport pickup and drops"
    },
    {
        icon : <FaSwimmingPool size={44} />,
        title : "Heated Pool",
        desc : "Pool is always heated at an optimal temperature and can be used anytime"
    },
    {
        icon : <FaGlassCheers size={44} />,
        title : "Happy hours",
        desc : "Happy hours is from 6pm to 8pm where you will get one tower of beer free with another"
    }  
    ])


        return (
            <div className="service-container">
                <div className="service-header">
                    <h2>Services</h2>
                </div>
                <div className="seperator" />
                <div className="services">
                    {services.map((service,index)=>{
                        return (<div className="service" key={index}>
                                <div className="service-icon">{service.icon}</div>
                                <h4>{service.title}</h4>
                                <p>
                                    {service.desc}
                                </p>
                            </div>)
                    })}
                        
                        
                </div>
            </div>
        )


}

export default Services