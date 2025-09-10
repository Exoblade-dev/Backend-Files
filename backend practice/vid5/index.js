const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// to basically ye upar jo do lines likhi hui hai ye use ki jaati hai unn data ko read kr paane ke liye jo ki json format me ho and jo url encoded formaat me likha ho ye type of data ko read krne ke liye inko use kiya jata hai iska help postman use krte waqt bhi hoga to haa aye hi point hai 

app.get("/",function(req, res){
    res.send("Hello world");
});
app.get("/main",function(req, res){
    res.send("Main page hai");
});
app.get("/hero",function(req, res){
    res.send("Hero page hai");
});

