const tinderUser = new Object()



tinderUser.id = 1234
tinderUser.name = "Anushka"
//console.log(tinderUser)

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Anushka",
            lastName: "Gurav"
        }
    }
}
//console.log(regularUser.fullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)

// const obj3=(...obj1,...obj2)
// console.log(obj3)

const user = [
    {

    },
    {

    },
    {

    }
]

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('id'))



const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Anu"
}
console.log(course.courseName)

//destructuring
const { courseInstructor: instructor } = course
console.log(instructor)


