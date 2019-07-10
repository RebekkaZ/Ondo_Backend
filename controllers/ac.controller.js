var Ac = require('../models/ac.model.js');

// Create and Save new AC Settings entry
exports.createAc = (req, res) => {
    
    // Validate request
    if(!req.body.deviceName) {
        return res.status(400).send({
            message: "Device name can not be empty"
        });
    }

    const ac = new Ac({
        deviceId: req.body.deviceId || "1",
        deviceName: req.body.deviceName || "Untitled Device",
        devicePower: req.body.devicePower || true,
        powerfulOn: req.body.powerfulOn || true,
        quietOn: req.body.quietOn || true,
        swingH: req.body.swingH || true,
        swingV: req.body.swingV || true,
        targetTemp: req.body.targetTemp || 24,
        fanSpeed: req.body.fanSpeed || 2,
        temperature: req.body.temperature || 26,
        humidity: req.body.humidity || 65
    });

    ac.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Entry."
        });
    });
};

// Retrieve and return Temperature and Humidity from latest Entry
exports.readSensor = (req, res) => {
    Ac.findOne({deviceId: '1'}, "temperature humidity").sort({ 'created_at' : 1 })
    .then(ac => {
        res.send(ac);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Entry."
        });
    });
};

// Retrieve and return latest Entry
exports.readAc = (req, res) => {
    Ac.findOne({deviceId: '1'}, {}).sort({ 'created_at' : 1 })
    .then(ac => {
        res.send(ac);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Entry."
        });
    });
};