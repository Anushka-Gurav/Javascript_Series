const user = {
    username: "anu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.user}, welcome to website`);
    }
}

user.welcomeMessage()

// const chai = (num1, num2) => {
//     return num1 + num2
// }
// console.log(chai(2, 2))


// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2, 3))