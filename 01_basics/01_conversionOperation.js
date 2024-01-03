let score = "3gyh3"
//console.log(typeof score); Output as String
console.log(typeof(score)); //Output as String

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)


let someNumber = 98
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)
// console.log(someNumber)
// console.log(typeof(someNumber))


//Why String To Number???

let value = 3
let negValue = -value
console.log(negValue);

//Operations

console.log(2+2)
console.log(3-1)
console.log(9*8)
console.log(8**2)
console.log(8/2)
console.log(8%3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) // If you have string in front or starting then it will considered itself as a string 
console.log(1 + 2 + "3") // But If you have a interger in front then it will conssidered itself as a Number


//Comparision Operators

console.log(3 > 9);
console.log(6 < 9);
console.log(5 >= 9);
console.log(6 <= 8);


//But We Face the problems when we started to compare 2 different data types with each other. So As a conclution we get the reult is never try to compare diffrent datatypes with each other. This will be good practise for the good Programmer.

console.log("3" > 0);
console.log("07" > 0);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("3" === 3);