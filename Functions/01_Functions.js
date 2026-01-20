function sayMyName(){
    console.log("hi")
}
sayMyName()


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(20,30,40))

// const add=function(){
//     return (2+4)
// }
// console.log(add())


const user={
    userName:"Anu",
    price:120
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)