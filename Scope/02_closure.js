function one() {
    const username = "anu"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //  console.log(website);
    two()

}
one()

/*
Child scope can access parent scope variable but parent scope can't access child scope variable
*/


function addOne(value) {
    return value + 1
}
addOne(5)

const addTwo = function (value) {
    return value + 2
}
addTwo(5)
