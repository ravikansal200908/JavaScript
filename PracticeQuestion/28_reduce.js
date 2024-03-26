const arr = [5, 1, 3, 2, 6]
function findSum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(findSum(arr))

//==================================

const out1 = arr.reduce(function (acc, curr) {
    acc = acc + curr
    return acc
}, 0)
console.log('out1 : ', out1)

//==================================

function findMax(arr) {
    let max = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log('max is : ', findMax(arr))

//==================================

const out2 = arr.reduce(function (max, curr) {
    if(curr > max){
        max = curr
    }
    return max;
}, 0);

console.log('max is : ', out2)
