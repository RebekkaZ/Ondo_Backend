var mongoose = require('mongoose');

const acSchema = mongoose.Schema({
    deviceId: {
        type: String, 
    },  
    deviceName: {
        type: String, 
    },
    devicePower:{
        type: Boolean
    },
    powerfulOn:{
        type: Boolean
    },
    quietOn:{
        type: Boolean
    },
    swingH:{
        type: Boolean
    },
    swingV:{
        type: Boolean
    },
    targetTemp:{
        type: Number
    },
    fanSpeed:{
        type: Number
    },
    temperature:{
        type: Number
    },
    humidity:{
        type: Number
    },
}, {timestamps: true });


module.exports = mongoose.model('Ac', acSchema);