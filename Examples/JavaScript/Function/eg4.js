// Types of Variables
// Global Variables 

var a = 10
function a1(){
    console.log(a)
}

console.log(a)
a1()
console.log(a)

// Local Variables
function a2(){
    var b = 100
    var c = 200
}
// console.log(b,c) // ReferenceError: b is not defind

a2()