const express = require("express");

const app = express()

app.use(function(req,res,next){
  console.log("middleware chala");
  next();
})

app.use(function(req,res,next){
  console.log("middleware chala ek aur baar");
  next();
})

app.get('/',function(req, res){
  res.send("Chala ja bsdk");
})

app.get('/about',function(req, res){
  res.send("Chala ja bsdk about page aa gaya ab to");
})



app.listen(3000)