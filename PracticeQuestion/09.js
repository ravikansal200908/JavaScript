var a = 10;

function b() {
    var x = 10
}

console.log(this.a)  // will work on browser
console.log(window.a)  // will work on browser
console.log(a)  // this and above line is same
console.log(x)  // show error as x is not in global space