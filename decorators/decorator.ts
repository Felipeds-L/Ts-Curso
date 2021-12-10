// @loginClass

// @logingCLassIf(true)



function loginClass(constructor: Function){
  console.log(constructor)
}

function decoratorEmpty(_: Function){}

function logingCLassIf(value: boolean){
  return value ? loginClass: decoratorEmpty
}

function decorator(a: string, b: number){
  return function(_: Function): void{
    console.log(a + ' ' + b)
  }
}

// @decorator('teste', 1234)

@logObject
class Eletronic{
  constructor(){
    console.log('novo...')
  }
}

type Construtor =  { new(...args: any[]): {} }

function logObject(constutor: Construtor){
  return class extends constutor{
    constructor(...args: any[]){
      console.log('before...')
      super(...args)
      console.log('after...')
    }
  }
}

new Eletronic()