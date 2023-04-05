const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
    name: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    email: String,
    linkedin: String,
    photos: [String],
    description: String,
});

const menteeModel = mongoose.model('Mentees', menteeSchema);

module.exports = menteeModel;