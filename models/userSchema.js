const mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    age: Number,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        zip: Number
    },
    contact: {
        phone: Number,
        email: String,
        website: String
    }, 
    forms: {
        active: [{ type: Schema.Types.ObjectId, ref: 'webform' }],
        inactive: [{ type: Schema.Types.ObjectId, ref: 'webform' }],
        drafts: [{ type: Schema.Types.ObjectId, ref: 'webform' }],
    }
});



module.exports = mongoose.model('user', userSchema);