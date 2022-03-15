const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
var session = require('express-session')
const path = require('path');
const User = require('./user');
const Detail = require('./register');
const Data = require('./details')
//const req = require('connect-flash');
var bodyParser = require('body-parser');
const userRoutes = require('./User1');
const LocalStratergy = require('passport-local');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))


app.use(passport.initialize());
app.use(passport.session());
app.use('/',userRoutes);
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const mongoUri = 'mongodb+srv://srinath:7981602417@cluster0.unt6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => {
        console.log('connection successful');
}).catch((err) => console.log(err));

app.get('/temp1/:id',(req,res)=>{
    var uid=req.params.id
    res.render('temp2input.ejs',{uid});
})

app.get('/register',(req,res) =>{
    res.render('register.ejs');
})

app.get('/temp2/:id',(req,res) => {
    var uid = req.params.id
    res.render('temp1input.ejs',{uid})
})
//MIDDLEWARE


app.get('/fakeUser', async(req,res) => {
    try{
    const user = new User({email: 'srinathreddy200230@gmail.com', username:'srinath'});
    const newUser = await User.register(user, 'Venkatsunitha143@');
    res.send(newUser);
}catch(e){
    console.log("that failed", e); 
}
})


app.get('/temp2Resume/:id',async(req,res)=>{
    try{
    var id = req.params.id
    const details = await Detail.findById(id);
    console.log(details);
    res.render('resume.ejs',{details})
    }
    catch(e){
        console.log(e);
    }
})

app.get('/temp1Resume/:id',async(req,res) =>{
    try{
        var id = req.params.id
        const data = await Data.findById(id);
        console.log(data);
        res.render('temp3.ejs' , {data})
    }
    catch(e){
        console.log(e);
    }
})

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})




