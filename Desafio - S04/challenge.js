"use strict";
// Challange 01
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Challange 02
const dizerOla = (nome = 'Pessoa') => {
    console.log(`Olá, ${nome}`);
};
dizerOla();
// Challange 03
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Challange 04
const array = [55, 20];
array.push(...nums);
console.log(array);
// Challange 05
const notas = [8.5, 6.3, 9.4];
console.log(...notas);
// Challange 06
const cientista = { primeiroNome: 'Felipe', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Callback
function espera3s(callback) {
    setTimeout(() => {
        callback('3s later...');
    }, 3000);
}
espera3s(function (result) {
    console.log(result);
});
function espera3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s promise later...');
        }, 3000);
    });
}
espera3sPromise().then(dado => console.log(dado));
