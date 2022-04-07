const mongoose = require('mongoose');
const {Schema} = mongoose;


var elementSchema = new Schema({



    title: String,
    input: String,

    
    
});

module.exports = mongoose.model('element', messageSchema);