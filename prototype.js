// prototype

// allow to create only one memory reference of method for all objects created by the constructor function, which can save memory and improve performance.

// Here's an example of how to use prototype in JavaScript:```javascriptfunction Person(name, age) {
//   this.name = name;
//   this.age = age;
// }       

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }           

// const person1 = new Person('Alice', 30);
// const person2 = new Person('Bob', 25);

// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.```In this example, we define a constructor function `Person` that takes `name` and `age` as parameters. We then add a method `greet` to the prototype of `Person`, which allows all instances of `Person` to access this method without having to create a new copy for each instance. When we create two instances of `Person`, they both can call the `greet` method, and it will work correctly, demonstrating the use of prototypes in JavaScript. 



// call decide which function to call

function introduce(city) {
  console.log("Hi I'm " + this.name + " from " + city);
}

let s1 = { name: "Anushka" };
let s2 = { name: "Riya" };

introduce.call(s1, "Pune");
introduce.call(s2, "Mumbai");
