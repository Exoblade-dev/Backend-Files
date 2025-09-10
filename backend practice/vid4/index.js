const express = require("express");

const app = express()

// ye hai middle ware ka pura code ye basically aise work karta hai ki jab hamlog request send krte hai system ke through uss waqt agar ham log website load hone se pehle koi kam karwana chhate hai to hamlog middle ware use krte hai jisse website load hone se pehle hi kuch work start ho jata hai 
app.use(function(req,res,next){
  console.log("middleware chala");
  next();
})

app.use(function(req,res,next){
  console.log("middleware chala ek aur baar");
  next();
})
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ye hai request and response wala pura section yha ye hota hai ki pehle hamlog frontend se chizo ko aacces krte hai and jab usem changes krte hai to wo backend me uss specific function ko call krta hai and wo fuction uske baad pages me chnage leke aata hai 
app.get('/',function(req, res){
  res.send("Chala ja bsdk");
})
app.get('/bsdk',function(req, res){
  res.send("Chala ja bsdk ye bsdk ka page aa gaya ab to");
})

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ye hai pura error hanadling ka section iss code se ham error ko handle kr sakte hai and if kisis bhi section me kisis type ki error aati ho to usko hamlog uss time ke liye skip krke aage wala kaam krwa sakte hai taaki baaki kaam disturb na ho 

app.get('/about',function(req, res, next){
  return next(new Error("Ssomething went wrong"));
})

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Somethiing Broke');
})
app.listen(3000)
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////