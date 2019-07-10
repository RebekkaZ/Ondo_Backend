var express = require('express');
var ac = require('../controllers/ac.controller')
var router = express.Router();

router.get('/sensor', ac.readSensor);

router.post('/ac', ac.createAc);

router.get('/ac', ac.readAc);

module.exports = router;
