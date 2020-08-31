import React,{useState,useEffect} from  'react'
import {Link} from 'react-router-dom'
import RoomHero from '../RoomHero/roomhero'
import RoomFilter from './roomfilter'
import RoomList from './roomlist'
import axios from 'axios'

const Rooms = () =>{
//     const filtertype; 
// const filtername; 
// const filtervalue;

    const [Rooms, setRooms] = useState([])
    const [filteredRoom, setFilteredRoom] = useState([])
    const [roomFilter, setRoomFilter] = useState({
        type : 'all',
        capacity : 1,
        price : 0,
        minPrice : 0,
        maxPrice : 0,
        minSize : 0,
        maxSize : 0,
        breakfast : false,
        pets : false
    })
    const getAllRooms = ()=>{
        axios.get('https://mern-hotel.herokuapp.com/rooms/')
        .then((response)=>{
            setRooms(response.data)
            setFilteredRoom(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const setDefaultfilter=()=>{
        if(Rooms.length > 0){
            const maxPrice = Math.max(...Rooms.map((item)=> item.price))
            const maxSize = Math.max(...Rooms.map((item)=> item.size))
            setRoomFilter({
                ...roomFilter,
                price : maxPrice,
                maxPrice,
                maxSize 
            })
        }
    }

    const filterRooms = ()=>{
        if(Rooms !== undefined)
        {
            let {type, capacity, price, minSize, maxSize, breakfast, pets} = roomFilter
            let tempRooms = [...Rooms]
            capacity = parseInt(capacity)
            price = parseInt(price)
            if(capacity !== 1)
            {
                tempRooms = tempRooms.filter( room => room.capacity >= capacity)
            }

            if(type !== 'all')
            {
                tempRooms = tempRooms.filter( room => room.type === type)
            }

            if(price !== 600)
            {
                tempRooms = tempRooms.filter(room => room.price <= price)
            }

            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

            if(breakfast)
            {
                tempRooms = tempRooms.filter(room => room.breakfast === true)
            }
            if(pets)
            {
                tempRooms = tempRooms.filter(room => room.pets === true)
            }
            setFilteredRoom(tempRooms)
        }
    }

    const handleChange = event =>{
        const filtertype = event.target.type
        const filtername = event.target.name
        const filtervalue = filtertype === "checkbox" ? event.target.checked : event.target.value
        setRoomFilter({
            ...roomFilter,
            [filtername] : filtervalue
        })
    }

    useEffect(()=>{
        getAllRooms();

    },[])


    useEffect(()=>{
        setDefaultfilter();
    },[Rooms])

    useEffect(()=>{
        filterRooms()
    },[roomFilter])
    
    // let filterRoomView = ``
    // if (Rooms.length > 0 && filteredRoom.length === 0)
    // {
    //     filterRoomView = <RoomList rooms = {Rooms}/>
    // }
    // else if(filteredRoom !== undefined){
    //     filterRoomView =  <RoomList rooms = {filteredRoom}/>
    // }
    return (
        <>
        <RoomHero 
            roomtype="Our Rooms" 
            roomdesc="Check out our rooms below">
                <Link to="/">Return home</Link>
        </RoomHero>
        <RoomFilter rooms = {Rooms} filter={roomFilter} handleChange={handleChange}/>
        <RoomList rooms = {filteredRoom}/>       
        </>
    )
}

export default Rooms