const  user = {
    uname : "Viraaj",
    price: 78990,

    wellcomeMessage: function(){
        console.log(`${this.uname} , welcome to the website`);
    }
}
// user.wellcomeMessage()
// user.uname = "Abhay"
// user.wellcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Abhay"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Abhay"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Abhay"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Abhay"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + "num2) // implicit return 
// const addTwo = (num1, num2) => {username: "Abhay"}

// console.log(addTwo(3, 9));.

// const myArray = [3, 8, 9, 88]

// myArray.forEach