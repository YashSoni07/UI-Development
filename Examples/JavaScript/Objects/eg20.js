// Abstraction :- the process of hiding internal implementation and highlighting set of services is called abstraction.
class Parent{

    firstName
    lastName

    constructor(firstName, lastName){
        if(this.constructor == Parent){
            throw new Error("Abstract class cant be instantiated")
        }
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails(){
        console.log("Parent Class: " + this.firstName, this.lastName);
    }
}

class Child extends Parent{

    constructor(firstName, lastName){
        super(firstName, lastName)
    }

    getDetails(){
        console.log("Child Class: " + this.firstName, this.lastName);
    }
}

// let p = new Parent("Yash", "Soni")
// console.log(p) // Parent { firstName: 'Yash', lastName: 'Soni' }
// p.getDetails() // Parent Class: Yash Soni

let c = new Child("Yash", "Soni")
console.log(c) //Child { firstName: 'Yash', lastName: 'Soni' }
c.getDetails() // Child Class: Yash Soni