// let a = 10;
// const b = 20;
// var c = 30;

let a = 300;//global scope
if (true) {
    let a = 10; //block scope
    const b = 20; //block scope
    var c = 30; //block scope
}

// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope

function one(){
    const username =  "Viraaj"

    function two(){
        const website = "Instagram"
        console.log(username);
        // console.log(website)
    }
    // console.log(website)

    two()
}

// console.log(one())
// one()

if(true){
    const username = "Viraaj"
    if(username === "Viraaj"){
        const website = "Whatsapp"
        // console.log(username + " -> " + website);
    }
    // console.log(website);
}
// console.log(username);


//+++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1;
}
console.log(addOne(5));

const addTwo = function(num1){
    return num1 + 2;
}
console.log(addTwo(9999));