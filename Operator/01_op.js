(function abc() {
    console.log("This is abc.js");
})();

(abc => function () {
    console.log("This is an IIFE with arrow function");
}
)()



//nullish coalescing operator example (??):null undefined
// if null or undefined set another value 
let val1;
val1 = 5 ?? 10;
console.log(val1); // Output: 5
val1 = null ?? 10;
console.log(val1); // Output: 10
val1 = undefined ?? 10;
console.log(val1); // Output: 10

//Ternary operator example
let age = 10 == 10 ? "child" : "adult";
console.log(age);
