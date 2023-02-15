// Spred Operator and Rest Operator
// Normal Function
function a1(x,y,z){
    return x+y+z
}
console.log(a1(10,20,30))

// Rest Operation
function a2(x,y,z, ...args){
    return x+y+z+","+ args
}
console.log(a2(10,20,30,40,50))

// Spread Operators
let a = ["NameOne", "NameTow", "NameThre", "NameFour"]
function getName(n1,n2,n3,n4){
    console.log(n1 + " "+ n2 + " " + n3 + " " + n4 +" ")
}
getName(a[0], a[1], a[2], a[3])
getName(...a)