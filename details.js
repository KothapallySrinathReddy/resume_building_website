const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Data = new Schema({
    Fullname: {
        type: String,
        required : true
    },
    Profession: {
        type: String,
        required : true
    },
     City: {
         type: String,
         required: true
     },
     Zipcode: {
         type:Number,
         required: true
     },
     Phoneno: {
         type:Number,
         required: true
         
     },
     Email: {
         type:String,
         required: true
         
     },
     image_url :{
         type:String,
         required:true
     },
     SchoolName: {
         type:String,
         required: true
     },
     Schoollocation: {
         type : String,
         required: true
     },
     Degree : {
         type : String,
         required : true
    },
     Experience: {
         type: String,
         required: true
     },
     Objective: {
         type: String,
         required: true
     },
     Skills: {
         type: String,
         required: true
     },
     uid : {
         type : Schema.Types.ObjectId
     }
})

module.exports  = mongoose.model('Data', Data);