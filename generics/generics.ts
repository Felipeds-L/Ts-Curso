function echo(object: any){
  return object
}

console.log(echo('Felipe'))
console.log(echo(22))
console.log(echo({name: 'felipe', age: 22}))


// Using Generics

function echoButBetter<T>(object: T): T{
  return object
}

console.log(echoButBetter('Felipe').length)
console.log(echoButBetter<number>(22)) // passing the result of the function as a Number return
console.log(echoButBetter({name: 'felipe', age: 22}))

// Generics in API

const avaliations: Array<number> = [10, 9.3, 7.7]

avaliations.push(8.4)
// avaliations.push('5.5')

console.log(avaliations)

type Echo = <T>(data:T) =>  T
const callEcho: Echo = echoButBetter
console.log(callEcho('Something'))

// Generic's class

abstract class binaryOperation<T, R>{
  constructor(public operator1: T, public operator2: T) {}

  abstract execute(): R
}

// console.log(new binaryOperation('Good', 'day').execute())
// console.log(new binaryOperation('1', '3').execute())
// console.log(new binaryOperation('Hello', '3').execute())


class binarySum extends binaryOperation<number, number>{
  execute(): number{
    return this.operator1 + this.operator2
  }
}

console.log(new binarySum(3,4).execute())

