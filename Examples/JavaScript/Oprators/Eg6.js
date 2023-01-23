// Bitwise Operators &, |, ^, ~

// IF both Conditios Sataisfy then the result is True
console.log(true & true) // 1
console.log(true & false) // 0
console.log(false & true) // 0
console.log(false & false) // 0

// In Both Conditios any one og them must Satisfyed
console.log(true | true) // 1
console.log(true | false) // 1
console.log(false | true) // 1
console.log(false | false) // 0

// If Both are same then the Result will be False
console.log(true ^ true) // 0
console.log(true ^ false) // 1
console.log(false ^ true) // 1
console.log(false ^ false) // 0


// Oppsite Binary Values
console.log(~true) //-2 // 00000000000001 // 11111111111110
console.log(~false)//-1 // 0000000000000 // 11111111111111

console.log('------------------------------')

// Bitwise Operators &, |, ^, ~
var a = 10
var b = 2
console.log(a&b) // 2

var a = 10
var b = 2
console.log(a|b) // 10

var a = 10
var b = 2
console.log(a^b) // 8

var a = 10
var b = 2
console.log(~a) // -11

var a = 10
var b = 2
console.log(~b) // -3
