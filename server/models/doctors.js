const mongoose = require('mongoose');
const { Schema } = require('mongoose');

 

const doctorSchema = new Schema({
    name: { 
        type: String}
        ,
    ratings:{
        type: String,

    },
    experince: {
        type: Number,
    },
    profilePic: {
        type: String,
    },

speciality:{
        type: String,
    }
});

 

module.exports = mongoose.model('doctor', doctorSchema);