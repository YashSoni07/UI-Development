// Iterables :- Reading Object
let user ={
    fName : "Yash",
    lName: "Soni"
}
console.log("fname"in user)
console.log("contect"in user)

// Iterables

for(i in user){
    console.log(user, user[i])
}