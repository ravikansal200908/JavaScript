/*
- y is HOF
    - x is closures
*/

function x() {
    console.log("Inside x")
}

function y() {
    console.log("Inside y")
    y()
}