/*
- Generators in JavaScript are special functions that can be paused and resumed at arbitrary points during execution.
- They allow you to generate a sequence of values lazily, on-demand.
- Which is particularly useful for dealing with potentially large or infinite sequences of data.
- Before generators were introduced, developers often used 
- callbacks, event emitters, or custom iterable objects to handle asynchronous operations or iterate over sequences of data.
- But generators offer a more concise and intuitive solution.
*/


/* ======================================================= Basic Generator Usage */
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator1 = simpleGenerator();

console.log(generator1.next().value); // Output: 1
console.log(generator1.next().value); // Output: 2
console.log(generator1.next().value); // Output: 3
console.log(generator1.next().value); // Output: undefined


/* ======================================================= Basic Generator Usage */
function* infiniteGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const generator2 = infiniteGenerator();

console.log(generator2.next().value); // Output: 0
console.log(generator2.next().value); // Output: 1
console.log(generator2.next().value); // Output: 2
// ...


/* ======================================================= Generator with Custom Logic */
function* fibonacciGenerator() {
    let prev = 0, curr = 1;
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const generator3 = fibonacciGenerator();

console.log(generator3.next().value); // Output: 1
console.log(generator3.next().value); // Output: 1
console.log(generator3.next().value); // Output: 2
console.log(generator3.next().value); // Output: 3
console.log(generator3.next().value); // Output: 5
// ...
