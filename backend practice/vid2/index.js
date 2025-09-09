const fs = require('node:fs');

// writefile 
// copyfile 
// appendfile 
// rename 
// unlink 


// 1-create krne ke liye 
// fs.writeFile("hello.txt", "hello bhoi kaise ho", function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("done");
// })

// 2-file ke content ko change krne ke liye 
// fs.appendFile("hello.txt", " apun badhiya bhoi", function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("done");
// })

// 3-file ko rename krne ke liiye 
// fs.rename("hello.txt", "hhey.txt", function(err){
//     if (err) 
//         console.error(err);
//     else
//         console.log("done");
// })

// 4-file ko copy krne ke liye 
// fs.copyFile("hhey.txt", "./copy/copy.txt" , function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("done");
// })

// 4.error-iss method me error aaa sakata hai to ye wwo error show krega if destinaation folder exist hi naahi krtaa 
// fs.copyFile("hhey.txt", "./copy/copy.txt" , function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("done");
// })

// PS D:\1. My Projects\Backend-Files\backend practice\vid2> node index.js
// [Error: ENOENT: no such file or directory, copyfile 'D:\1. My Projects\Backend-Files\backend practice\vid2\hhey.txt' -> 'D:\1. My Projects\Backend-Files\backend practice\vid2\copy2\copy.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'copyfile',
//   path: 'D:\\1. My Projects\\Backend-Files\\backend practice\\vid2\\hhey.txt',
//   dest: 'D:\\1. My Projects\\Backend-Files\\backend practice\\vid2\\copy2\\copy.txt'
// }

// 5-file delete krne ke liye 
// fs.unlink("hhey.txt", function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("removed");
// })

// 6-folder delete krne ke liye but default me sirf blank folder delete kr sakte hai agar folder me kuch bhi exist kr rha hai to fir function me ek recurssive krke property lagega usse fir delete ho sakta hai 
// fs.rmdir("./copy", {recursive: true} ,function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("removed");
// })

// 7-lekin agar utna dimag nahi lagana hai to hamlog direct rm use kr saakte haia to usse direct remove ho jayega 
// fs.rm("./copy", {recursive: true} ,function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("removed");
// })