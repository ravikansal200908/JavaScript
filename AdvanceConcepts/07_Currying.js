/*
- It's a technique that allows you to convert a function that takes multiple arguments into a sequence of functions.
- Each taking a single argument. This allows for more flexible and reusable code.
- Especially in scenarios where you might want to partially apply arguments to a function.
*/


/* ======================================================= Basic Currying */

// Without currying
function add(x, y) {
    return x + y;
}

console.log('Without currying : ', add(2, 3)); // Output: 5

// With currying
function curryAdd(x) {
    return function (y) {
        return x + y;
    };
}

const add2 = curryAdd(2);  //argument is saved in the Lexical Environment
console.log('With currying : ', add2(3));  // Output: 5


/* ======================================================= Currying with Arrow Functions */
const curryAdd_1 = x => y => x + y;

const add_2 = curryAdd_1(2);
console.log("Currying with Arrow Functions : ", add_2(3)); // Output: 5


/* ======================================================= Currying for Reusability */
const greet = greeting => name => `${greeting}, ${name}!`;

const greetHello = greet('Hello');
const greetHi = greet('Hi');

console.log(greetHello('Ravi')); // Output: Hello, Ravi!
console.log(greetHi('Shanky')); // Output: Hi, Shanky!


/* ======================================================= Currying with More Arguments */
const multiply = x => y => z => x * y * z;

const multiplyByTwo = multiply(2);
const multiplyByTwoAndThree = multiplyByTwo(3);

console.log(multiplyByTwoAndThree(4)); // Output: 24


/* ======================================================= Currying with More Arguments */
function a(a){
    return function b(b){
        return function c(c){
            return function d(d){
                return a+b+c+d
            }
        }
    }
}

const out_is = a(1)(2)(3)(4)
console.log('out is : ', out_is)
