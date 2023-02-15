// Accessing Properties From an Object
let l = {
    fistName : "Yash",
    lastName : "Soni",
    email : "SoniY123@email.com",
    company : function(){console.log("Wipro")}
}
console.log(l.fistName)
console.log(l["lastName"])

l.contect = 963852741
console.log(l.contect)

l["addres"] = "jbp"
console.log(l.addres)

console.log(l)
