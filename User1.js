const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('./user');
const Detail = require('./register');
const Data=require('./details')
//var flash=require("connect-flash");
const passport = require('passport');
const { nextTick } = require('process');

 //router.get('/register', (req,res) => {
     //res.render('register.ejs');
 //})

 router.get('/main',(req,res) =>{
     console.log(req.user);
     res.render('main1');
 })
 router.post('/register', async(req,res) =>{
    try{
    const {email,username,password} = req.body;
    const user = new User({email,username});
    let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const x=0
    /*for(let i=0;i<password.length;i++){
        if(cap.contains(password[i])==true){
            x+=1
            break
        }
        else{
            console.log(x)
        }
    }*/
    /*if(password.length<8){
        alert('password must contain greater than 8 charcters')
    }
    else if (password.length>15) {
        alert('password must be less than 15 characters')
    }*/
    const registeredUser= await User.register(user,password);
    req.login(registeredUser,err => {
        if(err) return next(err);
        console.log(registeredUser._id)
        const uid = registeredUser._id
        res.redirect(`/main/${uid}`);
    })

    }
    catch(e){
        console.log(e);
        res.redirect('register');
    }
    //console.log(registeredUser);
    
 })

 router.post("/store/:id" , async(req,res) =>{
    const details = new Detail({ 
    Fullname : req.body.fullname,
    Profession: req.body.profession,
    City:req.body.city,
    Zipcode:req.body.zipcode,
    Phoneno:req.body.phoneno,
    Email:req.body.email,
    image_url:req.body.image_url,
    SchoolName:req.body.schoolname,
    Schoollocation:req.body.schoollocation,
    Experience:req.body.experience,
    Objective:req.body.objective,
    Skills:req.body.skills,
    uid: req.params.id

    })
     
    details.save().then(details => {
        console.log(details);
        var id=details._id
        res.redirect(`/temp2Resume/${id}`)
    })
    .catch(e => {
        console.log(e);
    })
})
 
router.post("/storing/:id" , async(req,res) => {
    const data = new Data({ 
        Fullname : req.body.fullname,
        Profession: req.body.profession,
        City:req.body.city,
        Zipcode:req.body.zipcode,
        Phoneno:req.body.phoneno,
        Email:req.body.email,
        Degree:req.body.degree,
        image_url:req.body.image_url,
        SchoolName:req.body.schoolname,
        Schoollocation:req.body.schoollocation,
        Experience:req.body.experience,
        Objective:req.body.objective,
        Skills:req.body.skills,
        tid: req.params.id
        })
        data.save().then(data => {
            console.log(data);
            var id=data._id
            res.redirect(`/temp1Resume/${id}`)
        })
        .catch(e => {
            console.log(e);
        })
})

 router.get('/login',(req,res) =>{
    res.render('login.ejs');
})

router.get('/main/:id',(req,res)=>{
    //console.log(req.body);
    const uid = req.params.id;
    console.log(uid);
    res.render('main1',{uid})
})

router.post('/login', passport.authenticate('local',{failureFlash: true , failureRedirect: '/login.ejs'}),(req,res) =>{
    try{
    console.log('successfully logined');
    const uid = req.user._id
    res.redirect(`/main/${uid}`)
  }
    catch(e){
        console.log(e.message);
    }
 })



router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("login");
});
 


 module.exports = router;