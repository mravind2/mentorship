const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    email: String,
    linkedin: String,
    photos: [String],
    description: String,
    rating: String,
});

const mentorModel = mongoose.model('Mentors', mentorSchema);

module.exports = MenteeModel;