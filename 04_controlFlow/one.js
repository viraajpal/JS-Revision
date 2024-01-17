// if
// < , > , <= , >= , == , != , === , !==


// const isUserLoggedIn = true

// const tempreture = 33

// if( tempreture > 20 ){
//     console.log("Greater than 20");
// } else {
//     console.log("Temprature is les than 20");
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// const balance = 1000

// if ( balance < 500) {
//     console.log("less than 500");
// }else if(balance < 690) {
//     console.log("less than 690");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 1000");
// }

const userloggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("Allow to buy");
}
if(userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User Logged In");
}
