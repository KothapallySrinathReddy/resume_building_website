const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const mongoUri = 'mongodb+srv://srinath:7981602417@cluster0.unt6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
        console.log('connection successful');
}).catch((err) => console.log(err));
app.get('/',(req,res) =>{
    res.send('Hi there');
});
app.listen(3000, () =>{
    console.log("Listening on port 3000");
});