const mongoose =require('mongoose');
const schema=mongoose.Schema({
    name: String,
  email: String,
  department: String,
  designation: String,
  salary: String,
  dateOfJoining: String,
  attendance: Array, 
  performance: Array
})
const employeeData=mongoose.model('employee',schema);
module.exports=employeeData;