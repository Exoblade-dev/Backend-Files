// AGAR KOI DOUBT AAYE TO OBVIOUSLY HARSH BHAIYA KA BACKEND KA 2ND PART DEKH LO SAB REVIISE BHI HO JAYEGA AND SAB KUCH SAMJH BHI JAAYEGA 

// bassically ek setup krne ka method likh rha hu bas 

// npm init -y 
// npm i express 
// index.js file creation 
// setup the files add the parsers and then call the function with get and use listen to show it 
// npm i ejs 
// then set the view engine 
// now create a folder named views and make a file named index.ejs inside it 
// then use render in get to call the index.ejs file
// then make a folder named public inside the folder we have to make 3 folder 1.images , 2.js , 3.css and so on according to the need  
// and then we have to write a line of code for using the css andd vanilla jss for the project 
// finally we can start making owr project 



const express = require('express');                                   // initialiized express js
const app = express();
const path = require('path');                                         // required for path.join thing

app.use(express.json());                                              // parsers
app.use(express.urlencoded({ extended: true }));                      // parsers
app.use(express.static(path.join(__dirname,'public')));               // setting up the use of css and vanilla js from public folder maybe 
app.set('view engine','ejs');                                         // setting view engine

app.get("/", function(req , res){                                     //request and response function
    res.render("index");
});
app.get("/bsdk", function(req , res){                       
    res.send("chal rha hai");
});
app.get("/bsdk/:username", function(req , res){                       
    res.send(`Welcome , ${(req.params.username)}`);
});
app.get("/bsdk/:username/:age", function(req , res){                       
    res.send(`Welcome , ${(req.params.username)} , Your age is ${(req.params.age)}`);
});
app.get("/bsdk/:username/:age/:class", function(req , res){                       
    res.send(req.params);
});

app.listen(3000, function(){                                          // listening function
    console.log("its running");
})

