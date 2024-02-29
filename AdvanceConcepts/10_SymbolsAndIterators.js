/*
- Symbols
    - Symbols are a new primitive type introduced in ECMAScript 2015 (ES6).
    - They are unique and immutable values, often used as property keys for object properties to avoid naming collisions.

- Iterators
    - Iterators are objects that implement the iterator protocol
    - Which allows JavaScript objects to define or customize their iteration behavior.
    - They enable you to loop over a collection of data, such as arrays or custom objects,
    - Using the for...of loop or other looping constructs.
*/


/* ======================================================= Symbols */
// Creating a Symbol
const mySymbol1 = Symbol();

// Using Symbols as property keys
const obj1 = {
    [mySymbol1]: 'Hello, Symbol!'
};

console.log(obj1[mySymbol1]); // Output: Hello, Symbol!
console.log(obj1); // Output: Hello, Symbol!


// Creating symbols
const symbol1 = Symbol();
const symbol2 = Symbol('description'); // Optional description for debugging

console.log(typeof symbol1); // Output: symbol
console.log(symbol1 === symbol2); // Output: false


/* ======================================================= Symbols Constants */
// Creating unique constants with symbols
const COLOR_RED = Symbol('Red');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');

function paint(color) {
    switch (color) {
        case COLOR_RED:
            return 'Painting in Red';
        case COLOR_GREEN:
            return 'Painting in Green';
        case COLOR_BLUE:
            return 'Painting in Blue';
        default:
            return 'Unknown color';
    }
}

console.log(paint(COLOR_RED)); // Output: Painting in Red



/* ======================================================= Iterators */
// Using Iterator with an array
const numbers = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: 4, done: false }
console.log(iterator.next()); // Output: { value: 5, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }
console.log(iterator.next()); // Output: { value: undefined, done: true }


/* ======================================================= Using Symbols as Property Keys */
const mySymbol = Symbol('description');
const obj = {};

obj[mySymbol] = 'This is a symbol key';

console.log(obj[mySymbol]); // Output: 'This is a symbol key'


/* ======================================================= Iterating over an Array with for...of */
const array = ['a', 'b', 'c'];

for (const element of array) {
    console.log(element);
}
// Output:
// a
// b
// c
