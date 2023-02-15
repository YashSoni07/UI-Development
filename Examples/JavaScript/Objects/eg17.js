// Single Level Inheritance Using Paranter Construtor
class Parent{
    constructor(fistName, lastName){
        console.log(fistName);
        console.log(lastName);
    }
}

class Child extends Parent{
    constructor(email, address){
        super("Yash", "Soni")
        console.log(email);
        console.log(address);
    }
}

new Child("Soni@123.com", "JBP")