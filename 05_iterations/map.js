const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const myNums = array.map( (num) =>{ return num + 6})

// console.log(myNums);

//Chaining 

const newNums = array.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums);