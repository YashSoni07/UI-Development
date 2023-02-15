// Rest Opertor

// Nomal Function with Argumnets Keyword
function a1(){
    console.log(arguments)
}
a1(10,20,30,40,50)

// Using For Loop With Argument Keywords
function a2(){
    for (let i in arguments){
        console.log(i, arguments[i])
    }
}
a2(10,20,30,40,50)

// Rest Oprator
function a3(...args){
    console.log(...args)
}
a3(10,20,30,40,50)