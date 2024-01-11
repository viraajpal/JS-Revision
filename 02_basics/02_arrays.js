const marvals_h = ["A", "B", "C"]

const dc_h = ["D", "E", "F"]

const ABC = [1, 2, 3, 4, 5]

// marvals_h.push(dc_h)

// console.log(marvals_h)

const newMarvals_h = marvals_h.concat(dc_h).concat(ABC);

// console.log(newMarvals_h)

const newAction_h = [...marvals_h, ...dc_h]

// console.log(newAction_h)

const newArr = [1, 2, 3, 4, [3, 4, 5, 6], 8, 9, [1, 2, 3, 4, 5, 6]]


// console.log(newArr.flat(Infinity))


// console.log(Array.isArray("Abhay"))

// console.log(Array.from("Abhay"))


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.flat(score1, score2, score3, score4))