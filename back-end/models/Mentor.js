const mongoose = require('mongoose');
const { Schema } = mongoose;

const MentorSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  imageSrc: String,
  imageAlt: String,
  description: String,
  linkedin: String,
  location: String,
  role: String,
});

const MentorModel = mongoose.model('Mentor', MentorSchema);

module.exports = MentorModel;
