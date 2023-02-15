// Rest Oprators and Spread Operator
// object
let user = {
    name : "Yash Soni",
    age : 23, 
    contact : [987654321, 963852741]
}
console.log(user)

// Rest Oprator using Object
let {name, age, ...r} = user
console.log(user.name)
console.log(user.age)
console.log(r)

// Spread Operation Using Object
let newUser = {
    ...user
}
console.log(newUser)