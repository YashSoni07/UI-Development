let l1 = document.querySelector("#id1")
l1.style.backgroundColor = "skyblue"
l1.style.bordor = "2px sold"
l1.style.padding = "5px"

let l2 = document.querySelector(".l1")
l2.style.color = "blue"
l2.style.bordor = "2px sold"

let l3 = document.querySelectorAll(".c1")
for(let i = 0; i < l3.length; i++){
    console.log(l3[i].style.backgroundColor = "skyblue");
    console.log(l3[i].style.bordor = "2px sold");    
} 
