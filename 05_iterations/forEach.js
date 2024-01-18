const coding = ["js", "ruby", "java", "Python"]

// coding.forEach(function (val) {
//     console.log(val);
// } )

// coding.forEach( (item)  => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})