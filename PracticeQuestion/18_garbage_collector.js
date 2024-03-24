// smart garbage collector
/*
As y is not getting use in fun b 
so this will not getting store in closures
This is smart garbage collector
*/
function a(){
    var x = 90, z = 90;

    return function b(){
        console.log(x)
    }
}

var b = a()

b()