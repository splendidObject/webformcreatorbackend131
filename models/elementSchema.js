const mongoose = require('mongoose');
const {Schema} = mongoose;


var elementSchema = new Schema({
    label: String,
    inputType: String,
    checkbox: Boolean,
    date: { type : Date },
    email: String,
    number: String,
    password: String,
    url: String,
    text: String,
    isRequired: Boolean
});

module.exports = mongoose.model('element', elementSchema);