// Control Flow :-

// Q1 Javascript Program to Solve Quadratic Equation


// Q2 Javascript Program to Check if a number is Positive, Negative, or Zero

// let num = 0

// if(num>= 0)
// console.log("Its Positive"); 

// else if(num<=0)
// console.log("Its Zero");

// else
// console.log("Negative");

// Q3 Javascript Program to Check if a Number is Odd or Even

// let num = 4
// if (num%2==0) {
//     console.log(`${num} is Ever`);
// } else {
//     console.log(`${num} is Odd`);
// }

// Q4 JavaScript Program to Find the Largest Among Three Numbers

// let num1 = 10
// let num2 = 2
// let num3 = 3

// if (num1>num2 && num1>num3 ) {
//     console.log(`${num1} is Largest.`);
// } 
// else if(num2>num1 && num2>num3){
//     console.log(`${num2} is Largest.`);
// }
// else{
//     console.log(`${num3} is Largest.`);
// }

// Q5 JavaScript Program to Check Prime Number

// var num = 55
// if(num ===1){
//     console.log(`${num} is Neither Prime or NerComposite Number.`);
// }else if(num<1){
//     console.log(`${num} is Not A Prime Number.`);
// }else{
//     for(var i = 2; i<num;i++){
//         if(num%i==0){
//             var res = `${num} is Not A Prime Number.`
//             break
//         }else{
//             var res = `${num} is A Prime Number.`
//         }
//     }console.log(res);
// }

// Q6 JavaScript Program to Print All Prime Numbers in an Interval


// Q7 JavaScript Program to Find the Factorial of a Number

// let num = 0
// if(num==0){
//     console.log(`The Factorial of ${num} is 1`);
// }else if(num<0){
//     console.log(`Factorial For this ${num} Number done not Ecist.`);
// }else{
//     let a = 1;
//     for(i= 1; i<= num; i++){
//         a*=i;
//     }
//     console.log(`The Factorail of ${num} is ${a}`);
// }

// Q8 JavaScript Program to Display the Multiplication Table

// const number = 5
// for(let i = 1; i <= 10; i++){
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

// Q9 JavaScript Program to Print the Fibonacci Sequence

// let a = 0, b = 1
// let num = 10
// console.log(`Fibonacci Sequence :-`);
// console.log(a);
// console.log(b);
// for(var i = 0;i<=num;i++){
//     var tmp = a+b
//     console.log(tmp);
//     a = b
//     b = tmp
// }

// Q10 JavaScript Program to Check Armstrong Number


// Q11 JavaScript Program to Find Armstrong Number in an Interval


// Q12 JavaScript Program to Make a Simple Calculator

// either +, -, * or / 
// let operator = "/"
// let num1 = 10
// let num2 = 5
// let result

// if(operator== "+"){
//     result = num1+num1
// }else if(operator == "-" ){
//     result = num1-num2
// }else if(operator == "*"){
//     result = num1*num2
// }else if(operator == "/"){
//     result = num1/num2
// }else{
//     console.log("Enter any Numbler plz..!");
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`);

// Q13 JavaScript Program to Find the Sum of Natural Numbers

// const num = 15
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum += i;
// }
// console.log(`The sum of natural ${num} numbers is ${sum}`);

// Q14 JavaSc ript Program to Check if the Numbers Have Same Last Digit

// let num1 = 15
// let num2 = 19
// let num3 = 19
// let result1= num1 % 10
// let result3= num2 % 10
// let result2= num3 % 10

// if(result1==result2 && result1==result3){
//     console.log("Last Digit is same");
// }else{
//     console.log("Last Digit is Not Same");
// }

// Q15 JavaScript Program to Find HCF or GCD


// Q16 JavaScript Program to Find LCM


// Q17 JavaScript Program to Find the Factors of a Number

// let num = 10
// console.log(`The Factors of ${num} Are :-`);
// for(let i =1; i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }

// Q18 JavaScript Program to Display Fibonacci Sequence Using Recursion