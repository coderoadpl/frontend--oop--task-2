const makeCounter = function (name) {
    return {
        name: name,
        number: 0,
        inc: makeCounter.inc,
        status: makeCounter.status,
    }
}

// this is not the best solution
// constructor functions are better
makeCounter.inc = function () {
    this.number = this.number + 1
}
makeCounter.status = function () {
    console.log('Current number is: ' + this.number)
    return this.number
}


const counter1 = makeCounter('counter1')
const counter2 = makeCounter('counter2')
const counter3 = makeCounter('counter3')
const counter4 = makeCounter('counter4')

counter1.inc()
counter2.inc()
counter2.inc()
if (counter1.status() !== 1) throw new Error('Counter 1 do not work')
if (counter2.status() !== 2) throw new Error('Counter 2 do not work')