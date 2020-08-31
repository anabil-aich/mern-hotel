import React from 'react'
import "./roomblock.css"


const RoomBlock = ({children, name, price})=>{
    const imgImmport = name.replace(" ","")
    return(
        <div className="room">
            <img src={require(`../../Images/${imgImmport}.jpeg`)}/>
                    <div className="room-feature">
                        {children}
                    </div>
                    <div className="room-details">
                            <p style={{textTransform: 'capitalize'}}>{name}</p>
                            <p>Book for {price}</p>
                    </div>
                </div>
    )
}

export default RoomBlock;