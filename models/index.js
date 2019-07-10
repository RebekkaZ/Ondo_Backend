var mongoose = require('mongoose');

var Ac = ('./ac.model');

exports.connectDb = () => {
    console.log(process.env.DATABASE_URL);
    return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
};

exports.models = { Ac };

