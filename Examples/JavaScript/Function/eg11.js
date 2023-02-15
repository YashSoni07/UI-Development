// Arrow Function Using Args With TEmpleate String

// Normal Function
function a1(name){
    console.log(`User Name is ${name}`)
}
a1("Yash")

// Assign Variable to a Function
let a2 = function(name){
    console.log(`User Name is ${name}`)}
a2("Shashwat")

// Arrow Function
let a3 = (name) => {console.log(`User Name is ${name}`)}
a3("Harsh")

// Better for Single Arguments
let a4 = (name) => `User Name is ${name}`
console.log(a4("Kapil"))

// Multiple Arguments
let f5 = (id,name) =>{console.log(`User ID is ${id} and User Name is ${name}`)}
f5(101, "Gopil")