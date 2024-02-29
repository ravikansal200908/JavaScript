/*
- Memoization is an optimization technique used in computer programming to speed up repetitive function calls
- By caching the results of expensive function calls and returning the cached result
- When the same inputs occur again. This can help reduce redundant computation, resulting in improved performance
- Especially for functions with expensive calculations or computations.
*/


/* ======================================================= Basic Memoization */

function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

// Example function to be memoized
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoizing the fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)


/* ======================================================= Memoization for Expensive Computations */
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

// Example function with expensive computation
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memoizing the factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Output: 120 (calculated)
console.log(memoizedFactorial(5)); // Output: 120 (cached)


/* ======================================================= Memoization for Recursive Functions */
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

// Example recursive function to be memoized
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoizing the fibonacci function
const memoizedFibonacci1 = memoize(fibonacci);

console.log(memoizedFibonacci1(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci1(10)); // Output: 55 (cached)
