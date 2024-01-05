// Stack Memory(Primitive), Heap (Non-Primitive)

let myYoutubeName = "ViraajPaal47533@gmail.com"
let anotherName = myYoutubeName

anotherName = "Abhay Pal"

console.log(myYoutubeName)
console.log(anotherName)


let userOne ={
    email : "use@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "singhaniyasahab.com"

console.log(userOne.email);
console.log(userTwo.email);