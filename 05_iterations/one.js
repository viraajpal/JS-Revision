// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//         // break;
//     }
//     console.log(element);
// }


//Nested loop


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Outer loop value: ${j} and inner loop ${i}`);  
//         console.log(i + '*' + j + ' = ' + i* j );
//     }
// }

//Loops in Array

let myArray = [8, 9, 9, 7, 6]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

//Break

// for (let i = 1; i <= 20; i++) {
//     if(i == 9){
//         console.log("Value is equal to 9");
//         break;
//     }
//     console.log(`Values of i is : ${i}`);  
// }

// continue

for (let i = 1; i <= 20; i++) {
    if(i == 9){
        console.log("Value is equal to 9");
        continue;
    }
    console.log(`Values of i is : ${i}`);  
}