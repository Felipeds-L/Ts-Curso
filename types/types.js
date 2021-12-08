"use strict";
let namE = 'Felipe';
let age = 22;
let myArray = ['Felipe', 'Daniel'];
myArray.push(22);
var Color;
(function (Color) {
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["White"] = 4] = "White";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
let oneColor = Color.Red;
console.log(oneColor);
console.log(namE, age, myArray);
function sum(numb1, numb2) {
    return (numb1 + numb2);
}
console.log(sum(3, 4));
let functionarios = {
    supervisores: ['Mayra', 'Tayna'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal!';
        }
        else {
            return 'Fora do horário!';
        }
    }
};
console.log(functionarios.supervisores);
console.log(functionarios.baterPonto(7));
console.log(functionarios.baterPonto(13));
function falha(msg) {
    throw new Error(msg);
}
const product = {
    nome: 'Sabão',
    preco: -1,
    validaProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa de um nome ');
        }
        if (this.preco <= 0) {
            falha('preço invalido');
        }
    }
};
product.validaProduto();
