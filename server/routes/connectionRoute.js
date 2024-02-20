const express = require('express');
const router = express.Router();
const controllers = require('../controllers/connectionController');

// get all connections -> admin access
// need to make it post with a userId in body
router.get('/getall', controllers.getAllConn);
// get sent connections
router.get('/sent/:userId', controllers.getSentConn);
// get received connections
router.get('/received/:userId', controllers.getReceivedConn);
// send connection req
router.post('/',controllers.sendConn);
// accept connection
router.post('/accept/:id',); // connection _id
// reject connection
router.post('/reject/:id',); // " " " " 


module.exports = router;