"use strict";
function echo(object) {
    return object;
}
console.log(echo('Felipe'));
console.log(echo(22));
console.log(echo({ name: 'felipe', age: 22 }));
// Using Generics
function echoButBetter(object) {
    return object;
}
console.log(echoButBetter('Felipe').length);
console.log(echoButBetter(22)); // passing the result of the function as a Number return
console.log(echoButBetter({ name: 'felipe', age: 22 }));
// Generics in API
const avaliations = [10, 9.3, 7.7];
avaliations.push(8.4);
// avaliations.push('5.5')
console.log(avaliations);
const callEcho = echoButBetter;
console.log(callEcho('Something'));
// Generic's class
class binaryOperation {
    constructor(operator1, operator2) {
        this.operator1 = operator1;
        this.operator2 = operator2;
    }
}
// console.log(new binaryOperation('Good', 'day').execute())
// console.log(new binaryOperation('1', '3').execute())
// console.log(new binaryOperation('Hello', '3').execute())
class binarySum extends binaryOperation {
    execute() {
        return this.operator1 + this.operator2;
    }
}
console.log(new binarySum(3, 4).execute());
