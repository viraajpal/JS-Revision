//Date

const myDate = new Date()
console.log(myDate.toString())

// console.log(Date())

console.log(myDate.toLocaleDateString())

// let myCurrentDate = new Date(2023, 0, 23)
// let myCurrentDate = new Date(2023, 0, 23, 5, 6)
// let myCurrentDate = new Date("2023-01-2")
let myCurrentDate = new Date("02-06-2023")

console.log(myCurrentDate.toLocaleDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCurrentDate.getDate());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);

// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())


newDate.toLocaleDateString("default", {
    weekday : "long"
});
