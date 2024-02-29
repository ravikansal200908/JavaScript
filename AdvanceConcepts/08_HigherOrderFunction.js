/*
- Higher-order functions are functions that can take other functions as arguments or return functions as their results.
- In JavaScript, functions are first-class citizens, meaning they can be treated like any other value.
- Such as passing functions as arguments to other functions or returning functions from functions.
*/


/* ======================================================= Functions as Arguments */
function applyOperation(x, y, operation) {
    return operation(x, y);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(applyOperation(3, 4, add)); // Output: 7
console.log(applyOperation(3, 4, multiply)); // Output: 12


/* ======================================================= Functions as Return Values */
function createGreeter(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const greetHello = createGreeter('Hello');
console.log(greetHello('Ravi')); // Output: Hello, Ravi!


/* ======================================================= Functions Passed to Array Methods */
const numbers = [1, 2, 3, 4, 5];

// Map: Applies a function to each element of the array
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Filter: Returns elements that satisfy a condition
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce: Combines all elements of the array into a single value
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 15


/* ======================================================= Functions for Callbacks */
function fetchData(url, callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        const data = { name: 'Ravi', age: 30 };
        callback(data);
    }, 1000);
}

fetchData('https://example.com/data', function (data) {
    console.log('Received data:', data);
});
