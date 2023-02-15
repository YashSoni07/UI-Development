// This
let l = {
    fistName : "Yash",
    lastName : "Soni",
    company : function() {
        console.log(this)
        console.log(this.fistName)
        console.log(this.lastName)
        console.log("Wipro")
    }
}
l.company()

// 
console.log(this)
this.a = 10
this.b = 20
console.log(this)