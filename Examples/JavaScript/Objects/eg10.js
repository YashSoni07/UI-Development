// Adding, Updating nd Deleting in Object

let firstName = "yash"
let lastName = "Soni"

let user = {
    firstName: firstName,
    lastName: lastName
}

// Adding
user.contect = 963852741
console.log(user.contect)
console.log(user)

// Updating
user.firstName = "Yash"
console.log(user.firstName)
console.log(user)

// Deleting
delete user.lastName
console.log(user)