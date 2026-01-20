student={
    id:1,
    name:"Anushka",
    email:"anushkagurav532@gmail.com"

}

console.log(student.id)
console.log(student["id"])
//Object.freeze(student) //changes will not propogate to the original object


student.greeting=function(){
    console.log("Hello js user")
}
console.log(student.greeting())


student.greeting2=function(){
    console.log(`Hello ${this.email}`)
}
console.log(student.greeting2())