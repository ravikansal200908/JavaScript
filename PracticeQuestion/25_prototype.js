const radius = [3, 1, 2, 4]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumeference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}


Array.prototype.calculate = function (logic) {
    const output = []

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }

    return output;
}
console.log('Area : ', radius.map(area))
console.log('Area : ', radius.calculate(area))
console.log('Circumeference : ', radius.calculate(circumeference))
console.log('Diameter : ', radius.calculate(diameter))
