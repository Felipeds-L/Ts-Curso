let namE: string = 'Felipe'
let age: number = 22

let myArray: any[] = ['Felipe', 'Daniel']
myArray.push(22)

enum Color{
  Black = 2,
  Red,
  White,
  Blue
}
let oneColor = Color.Red

console.log(oneColor)
console.log(namE, age, myArray)

function sum(numb1: number, numb2: number): number{
  return (numb1 + numb2)
}

console.log(sum(3,4))

type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) =>  string
}

let functionarios: Funcionario = {
  supervisores: ['Mayra', 'Tayna'],
  baterPonto(horario: number): string {
    if(horario <= 8){
      return 'Ponto Normal!'
    }else{
      return 'Fora do horário!'
    }
  }
}

console.log(functionarios.supervisores)
console.log(functionarios.baterPonto(7))
console.log(functionarios.baterPonto(13))

function falha(msg: string): never{
  throw new Error(msg)
}

const product = {
  nome: 'Sabão',
  preco: -1,
  validaProduto(){
    if(!this.nome || this.nome.trim().length == 0){
      falha('precisa de um nome ')
    }
    if(this.preco <= 0){
      falha('preço invalido')
    }
  }
}

product.validaProduto()