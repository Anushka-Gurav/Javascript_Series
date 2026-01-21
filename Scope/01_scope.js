let a = 10
const b = 20
var c = 30 //global scope


var c = 200
if (true) {
    let a = 300
    var c = 20;
}

console.log(a)
console.log(c);
