import React from 'react'

const getUniqueValues = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}


const RoomFilter = (props)=>{

    console.log(props)

    let types = getUniqueValues(props.rooms, 'type')
    let capacity = getUniqueValues(props.rooms, 'capacity')
    types = ['all',...types]

    return (
        <div className="room-filter-container">
            <div className="room-filter-title">
                <h2>Search Rooms</h2>
                <div className="seperator"></div>
            </div>
            <div className="room-filter">
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">
                            room type
                        </label>
                        <select 
                        name="type" 
                        id="type" 
                        value={props.filter.type}
                        className = "form-control"
                        onChange={props.handleChange}
                        >
                            {types.map((type,index)=> <option key={index} value={type}>{type}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">
                            Guests
                        </label>
                        <select 
                        name="capacity" 
                        id="capacity" 
                        value={props.filter.capacity}
                        className = "form-control"
                        onChange={props.handleChange}
                        >
                            {capacity.map((cap, index)=> <option key={index} value={cap}>{cap}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                    <label htmlFor="price">room price ${props.filter.price}</label>
                        <input
                            type="range"
                            name="price"
                            min={props.filter.minPrice}
                            max={props.filter.maxPrice}
                            id="price"
                            value={props.filter.price}
                            onChange={props.handleChange}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={props.filter.minSize}
              onChange={props.handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={props.filter.maxSize}
              onChange={props.handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={props.filter.breakfast}
              onChange={props.handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={props.filter.pets}
              onChange={props.handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
                </form>
            </div>
        </div>
    )
}

export default RoomFilter

