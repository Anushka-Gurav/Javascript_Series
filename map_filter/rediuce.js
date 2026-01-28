const myNums = [1, 2, 3]
// const totalVal=myNums.reduce(function (acc,currVal){
//     console.log(acc + ":" +currVal)
//     return acc + currVal
// },3)
// console.log(totalVal)


const totalVal=myNums.reduce((acc,currVal) => acc+currVal,0)
console.log(totalVal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
     {
        itemName : "js Course",
        price : 2999
    },
     {
        itemName : "Data science",
        price : 999
    },
    
]

const totalPrice=shoppingCart.reduce((acc,item)=>acc+ item.price,0)
console.log(totalPrice)