const arr = [5, 1, 3, 2, 6]

// Double = [10, 2, 6, 4, 12]
// Triple = [15, 3, 9, 6, 18]
// Binary = ["101", "1", "11", "10", "110"]

function double(x) {
    return x * 2
}
function triple(x) {
    return x * 3
}
function binary(x) {
    return x.toString(2)
}

const out1 = arr.map(double)
console.log(out1)

const out2 = arr.map(triple)
console.log(out2)

const out3 = arr.map(binary)
console.log(out3)

//================== With HOF

const out4 = arr.map(function binary(x) {
    return x.toString(2)
})
console.log(out4)

const out5 = arr.map((x) => {
    return x.toString(2)
})
console.log(out5)