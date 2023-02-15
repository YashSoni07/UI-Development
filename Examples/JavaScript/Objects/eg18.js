// Construtor With Agruments using this. keyword nd Prototype method using this. keywords
class Parent{
    constructor(fistName, lastName){
        this.fName = fistName
        this.lName = lastName
    }

    // Prototype Method
    getDetails(){
        console.log(this.fName, this.lName);
    }
}

let p = new Parent("Yash", "Soni")
p.getDetails()