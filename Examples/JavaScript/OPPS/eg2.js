// Contrutor Proototype and Statie Method
class Product{
    constructor(){
        console.log("Default Constructor")
    }

    getUsreDeatlis(){
        console.log("Prototype Method")
    }
    static getProductDeatlis(){
        console.log("Static Method")
    }
}

new Product().getUsreDeatlis()
Product.getProductDeatlis()
