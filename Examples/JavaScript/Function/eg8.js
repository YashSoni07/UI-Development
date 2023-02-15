// Pure Function :-
// Pure function does not modify
// Pure functions does not access a external values
// Pure functions are always dependent on the arguments


function a1(n){
    square = n*n
    return square
}
console.log(a1(5))

// Pure Function
function a2(userName, password){
    if (userName == "YashSoni" && password == "007")
    console.log("Login Success")
    else{
        console.log("Login Failed")
    }
}
a2("YashSoni", "007")

// Inpure Function
function a3(userName, password){
    userName = "Shashwat"
    if (userName == "YashSoni" && password == "007")
    console.log("Login Success")
    else{
        console.log("Login Failed")
    }
}
a3("YashSoni", "007")

// Inpure Function
let a = [10,20,30]
function a4(elements){
    a.push(elements)
    console.log(a)
}

a4(40)
