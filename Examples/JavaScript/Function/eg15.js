// HOF Higher Order Function
// A Function that takes as Argument or a Returns a Function
let a1 = function(){
    return function(){
        console.log("A1 Function")
    }   
}

console.log(a1) // [Function: a1]

let a2 = a1()
console.log(a2) // [Function (anonymous)]
a2() // A1 Function