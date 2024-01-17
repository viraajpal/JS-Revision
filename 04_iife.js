// Immediately Invoked Function Expressions (IFFE)

// function chai(){
//  Named IIFE
//     console.log(`DB Connected`);
// }
// chai()

// (function chai(){
//     console.log(`DB Connected`);
// })();

( (name) => {
    console.log(`DB Connected Two ${name}`);
}) ('Viraaj')