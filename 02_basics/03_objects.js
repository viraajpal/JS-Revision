//singleton

//object.create ---> known as constructor mathod

//object literals

const mySym = Symbol("keys1")

const jsUser = {
    name : "Viraaj",
    "full name" : "Viraaj Pal", 
    age : 21, 
    location: "dehradun",
    [mySym]: "mykeys1", 
    email: "viraajpaal43gmail.com"
}

// console.log(jsUser.age)

// console.log(jsUser["email"])

// console.log(jsUser["full name"])


// console.log(jsUser[mySym])


jsUser.email= "viraaj@gpt.com"
// console.log(jsUser["email"])

// Object.freeze(jsUser) //After freezing there will no change happened in your defined things

// jsUser.age = 54
// console.log(jsUser)

//To add a function in object of javascript

jsUser.greeting = function(){
    console.log("Hello Sir!");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Sir!, ${this.name}`); //We are reffering the name.
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());