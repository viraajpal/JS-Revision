// function sayMyName (){
//     console.log("A")
//     console.log("B")
//     console.log("H")
//     console.log("A")
//     console.log("Y")
// }

// sayMyName()

function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumbers(3, 9)

// console.log("Result: ", result);

function loginUserName(userName = "Abhi"){
    if (userName === undefined){
        console.log("Please enter a user name. ")
        return 
    }
    return `${userName} just logged in`
}
// console.log(loginUserName("Abhay"))

function calculatorCartPrice(...num1){
    return num1
}

// console.log(calculatorCartPrice(100, 800, 900, 80000))


const user = {
    userName: "Viraaj",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}.`);
}
// handleObject(user)

handleObject({
    userName: "Abhi",
    price: 3999
})

const myNewArray = [200, 900, 8888, 9999]

function returnSecondValue(getArray){
    // return getArray[3] // get index-wise Array
    return getArray // get complete Array
}

// console.log(returnSecondValue(myNewArray));

