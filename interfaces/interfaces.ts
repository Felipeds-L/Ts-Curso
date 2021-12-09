interface Human{
  nome: string
  idade?: number
}

function saudarComOla(pessoa: Human){
  console.log(`Hey, ${pessoa.nome}`)
}

function mudarNome(pessoa: Human){
  pessoa.nome = 'Milk'
}

const pessoa = {
  nome: 'Felipe',
  idade: 22,
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: 'Felipe', idade: 22})
