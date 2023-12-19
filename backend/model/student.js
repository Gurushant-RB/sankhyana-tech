const mongoose= require('mongoose');
const studentSchema=new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    password:String

})

module.exports =  new mongoose.model('Student', studentSchema);