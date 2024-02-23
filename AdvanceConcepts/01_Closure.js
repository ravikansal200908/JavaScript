/*
- Closures in JavaScript refer to the ability of a function to access its lexical scope
- Even when that function is executing outside its original lexical scope.
- In simpler terms, a closure allows a function to remember and access its lexical scope.
- Even when that function is invoked outside of that lexical scope.
*/

/* ======================================================= Basic Example */
function outerFunction() {
    const email = 'testing@gmail.com';

    function innerFunction() {
        console.log("Email is : ", email);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();


/* ======================================================= In Asynchronous Code */
function greeting(message) {
    setTimeout(function () {
        console.log("Before message.")
        console.log(message);
        console.log("After message.")
    }, 1000);
}

greeting('Hello, world!');


/* ======================================================= With Private Variables */
function createCounter() {
    let count = 0; // count is a private variable

    return function () {
        return ++count;
    }
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
