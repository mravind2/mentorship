const mongoose = require('mongoose');
const {Schema} = mongoose;

const MentorSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
});

const MentorModel = mongoose.model('Mentor', MentorSchema);

module.exports = MentorModel;