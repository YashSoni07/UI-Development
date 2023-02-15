// Polymorphsin : Having ManyForms
class Parent{
    constructor(fistName, lastName){
    this.fNaem = fistName
    this.lName = lastName 
    }

    getDetails(){
        console.log("Parnet" + this.fNaem, this.lName)
    }
}

class Child extends Parent{
    getDetails(){
        super.getDetails()
        console.log("Child"+ this.fNaem, this.lName)
    }
}

new Child("Yash", "Soni").getDetails()