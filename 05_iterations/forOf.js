//For of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 5, 7, 8, 9]

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World"

for (const greet of greeting) {
    // console.log("Each char is :", greet);
}

//Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "US")
map.set('FR', "France")

console.log(map);

//If you are taking key so you will get an Array formate output

// for (const key of object) {
//     console.log(key);
// }
for (const [key, value] of map) { //---> Array destructured ho jayega key value square [] me lene se.
    // console.log(key , ':-', value);
}

// for of" loop can not be able to iteratable in the object ib js

// const myObject = {
//     'Game1': 'NFS',
//     'Game2': 'BFS',
// }
// for (const [key, value] of myObject) {
//     console.log(key , ':-', value));
// }


