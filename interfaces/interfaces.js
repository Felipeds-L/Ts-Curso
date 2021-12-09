"use strict";
function saudarComOla(pessoa) {
    console.log(`Hey, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Milk';
}
const pessoa = {
    nome: 'Felipe',
    idade: 22,
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Felipe', idade: 22 });
