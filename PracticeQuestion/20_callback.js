// Callback, When a function take another function as argument

setTimeout(function () {
    console.log("Inside setTimeout")
}, 5000)


function x(y) {
    console.log("x")
    y()
}

x(function y() {
    console.log("y")
})

/*
setTimeout --> callback Queue --> EventLoop --> Call Stack
*/
