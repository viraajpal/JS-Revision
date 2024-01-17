// const userEmail = "viraaj@gmail.com"

// if (userEmail) {
//     console.log("got the logged in ");
// }
// else{
//     console.log("do not logged in");
// }

// falsy values

// false, 0, -0 , BigInt , 0n , "" , null , undefined , NaN 

// Truthy values

// "0" , "false" , " " , [] , {} , function(){}-->Empty function

// To check an array

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyobj = {
//     user : "viraajPal"
// }

// const emptyobj = {}

// if (Object.keys(emptyobj).length === 0 ) {
//     console.log("Object is empty");
// }else{
//     console.log("Object is not empty");
// }

const userloggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

// if(userloggedIn && debitCard){
//     console.log("Allow to buy");
// }
// if(userLoggedInFromGoogle || userLoggedInFromEmail) {
//     console.log("User Logged In");
// }

// Nullish Coalescing Operator (??): Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 65 // Always goes for the first value

console.log(val1);

//Terniary Operator

// conndition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less then 80");