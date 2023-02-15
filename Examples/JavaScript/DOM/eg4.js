var v1 = document.getElementsByClassName("list1")
console.log(v1)

v1[0].textContent = "Apple"
v1[1].textContent = "Samsung"
v1[2].textContent = "ViVo"
v1[3].textContent = "MI"
v1[4].textContent = "Realme"

console.log(v1[0])
console.log(v1[1])
console.log(v1[2])
console.log(v1[3])
console.log(v1[4])

v1[1].style.backgroundColor = "Lightblue"
v1[2].style.fointSize = "20px"

for(i = 0; i<v1.length; i++){
    console.log(v1[1].style.fointFamilly="arial");
}