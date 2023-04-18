const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;