const { hasSubscribers } = require('diagnostics_channel');
const http = require('http');

const server = http.createServer(function(req , res){
    res.end("hello world");
})
server.listen(3000);


// package install and uninstall kaise krna hai wo bataya gaya hai 

// npm i PackageKaNaam -> for installing
// npm uninstall PaackageKaNaam -> for uninstalling

// ab specific versions ki baaat hai to wo bhi kr sakte hai 
// npm i PackageKaNaam@Version -> ye hai specific version ke liye 

// ab node modules ki baat ki jaa rahi hai 


// --DEPENDENCIES--

// to baasically jab hamlog koi package ko install krte haia tab uske saaath kuch dependencies ko bhi install krna apadt hai taaki jo package ham use krna chhate haia wo properly chal sake but hamlog ko wo manually krne ki jarurat nahi hai wo automatically downloaad ho jaati hai with the package itself and wo delete bhi ho jaati hai when we delete the package 

// so basically 
// package -> dependencies
// fir unn depedencies ki dependencies , ye bhi ho sakta hai 

// --DEV DEPENDENCIES--

// basically wo packages jo hume development ke time kaam aayenge paar jab app ban jaayega aur upload ho jayega tab uske baad hum unn packages ko use nahi kr rahe honge 



// ab scripts ki baat hai 

// to basically ek question aay ahi ki 
// jab haamlog koi script ko run krte haai to uss waqt hai isss type ke ccodes use krte hai 
// npm start 
// npm run dev 
// npm run concurrent

// to basically aisa kyu kahi run use kr rahe hai and kahi nahi kr rahe hai to aisa kyu 