// Call Back Function
// The Function that is Passed as Argument to ANother Function and Invoked in Another Function
function a1(fistName, lastName){
    console.log(`My Fist Name ${fistName} and My Last Name ${lastName}`)
}
function a2(fistName, lastName){
    fName = "is " + fistName
    lName = "is " + lastName
    a1(fName, lName)
}
a2("Yash", "Soni.")
a2("Shashwat", "Jain.")