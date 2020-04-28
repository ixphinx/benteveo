const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    msgname: String,
    msglastname: String,
    msgmail: String,
    msgtel: String,
    msgtext: String,
    item: String


});

module.exports= mongoose.model('Data', Data);
