function Counter() {
    var count = 0

    this.incCounter = function () {
        count++;
        console.log(count)
    }

    this.decCounter = function () {
        count--;
        console.log(count)
    }

}

var c1 = new Counter()
c1.incCounter()
c1.incCounter()
c1.decCounter()

