const mongoose = require('mongoose');
const {Schema} = mongoose;


var elementSchema = new Schema({
    label: String,
    inputType: String,
    isRequired: Boolean
});

module.exports = mongoose.model('element', elementSchema);