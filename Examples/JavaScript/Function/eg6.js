// Function Calling
function a1(){
    console.log("A1 Functions")
    a2()
}

function a2(){
    console.log("A2 Functions")
}

a1()

// Assiging a Function To A Variables
let f = function a3(){
    // console.log("A3 Fumctions")
    return "A3 Functions"
}
f()
console.log(f())
console.log(f)
