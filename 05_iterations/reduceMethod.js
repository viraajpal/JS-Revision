const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 1)

// console.log(myTotal);

// const total = myNums.reduce( (acc, curr ) => acc + curr, 0)
// console.log(total);

const shopingCart = [
    {
        itemName: "JS course",
        price: 9999,
    },
    {
        itemName: "Python",
        price: 9999,
    },
    {
        itemName: "Mobile Development",
        price: 9999,
    },
]

const priceToPay = shopingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(priceToPay)

