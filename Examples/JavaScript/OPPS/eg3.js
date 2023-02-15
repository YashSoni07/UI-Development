class Product{
    constructor(){
        let fistName
        let lastName
    }
    getUserDetalis(){
        console.log(this.fistName, this.lastName)
    }
}

let p = new Product()
p.fistName = "Yash"
p.lastName = "Soni"
p.getUserDetalis()