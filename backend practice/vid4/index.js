const express = require("express");

const app = express()

app.get('/',function(req, res){
  res.send("Chala ja bsdk");
})



app.listen(3000)