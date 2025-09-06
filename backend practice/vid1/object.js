let obj = {
    Name : "Sahil",
    Age : 20,
    Class : 301,
    Branch : "CSE",
    Roll : 24547,

}
Object.freeze(obj)

obj.Age = 25 

console.log(obj['Name'])
console.log(obj.Age)
console.dir(obj)



console.log("////////////////////////////////////////////////////////////////////")