// Passing Defult Values in Functions
function a1(a = 10, b = 20){
    console.log(a,b)
}

a1()
a1(100,200)
a1(1000)

// Passing Key and Value In Functions
function a2(x,y){
    console.log(x,y)
}
a2(10,20)
a2(x = 100, y = 200)