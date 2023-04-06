const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompanySchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
});

const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = CompanyModel;