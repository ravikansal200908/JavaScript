// Function Statement aka Function Declaration
function a() {
    console.log("a is called")
}
a()

// Function Expression
var b = function () {
    console.log("b is called")
}
b()

// Anonymous Function
/*
    If we directly execute function it shows error
    SyntaxError: Function statements require a function name
    function (){
        console.log("b is called")
    }
*/

// Named Function Expression
var b = function xyz() {
    // because of xyz it's named function
    // xyz only accessable in this block only
    console.log("inside named function")
}
b()
xyz() // error


// Difference between Parameters and Arguments?
function fun1(parm1, param2){
    console.log("Inside function body")
}

fun1(arg1, arg2)


// First Class Function/Citizens
/*
- Pass a function as a argument
- Or return a function
- Ability to be used like values
*/
 

// Arrow Function

