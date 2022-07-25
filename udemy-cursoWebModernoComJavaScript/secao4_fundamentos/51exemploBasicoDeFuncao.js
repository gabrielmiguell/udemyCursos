/*Armazenando uma
 fução em uma variavel 
*/

/*Podemos armazenar uma função em uma variável
*/

const imprimirSoma = function (a,b) {
    console.log(a + b);
};
imprimirSoma(2, 3);



/*Armazenando uma fução arrow 
em uma variável. 
*/
const soma = (a, b) => {
    return a + b;
};
console.log(soma(2, 3));



/*Retorno Implícito
*/
const subtracao = (a = 1, b = 0) => a - b;
console.log(subtracao(3, 3));

//Função único parâmetro
const imprimir2 = a => console.log(a);
