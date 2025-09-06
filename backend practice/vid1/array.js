let a = [1,2,3,4]

// Foreach ke liye
let b = a.forEach(function(value){
    console.log(value + 1);
})

// map ke liye
let c = a.map(function(value){
    if (value >= 3)
        return true;
    else
        return false;
})

console.log(c)

// filter ke liye 
let d = a.filter(function(value){
    if (value >= 3)
        return true;
    else
        return false;
})

console.log(d)

// find ke liye 
let e = a.find(function(value){
    if(value === 2)
        return true;
    else
        return false;
})

console.log(e)

// indexOf ke liye 
let f = a.indexOf(3)

console.log(f)


console.log("////////////////////////////////////////////////////////////////////")