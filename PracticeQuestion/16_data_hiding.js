function counter(){
    var count = 0

    function increment(){
        count++;
        console.log(count)
    }

    return increment
}

var c1 = counter()
c1()
c1()
c1()

var c2 = counter()
c2()
c2()
c2()
