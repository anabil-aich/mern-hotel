const route = require('express').Router()

const roomController = require('../controllers/room')

route.get('/',roomController.getAllRooms)
route.get('/room', roomController.getRoom);
route.get('/featuredroom', roomController.getFeaturedRoom)
route.post('/addroom', roomController.addRoom)

module.exports = route