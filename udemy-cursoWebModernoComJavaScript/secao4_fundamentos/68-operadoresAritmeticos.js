/*Os operadores aritméticos são Operdores Binários porque há dois operadores.
*/
const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;  //Resto da Divisão

console.log(soma, subtracao, multiplicacao, divisao);


//Operadores Unários - Unary Operators
//Prefix and Postfix
/*Postfix: meaning the operator comes after the operand(y++). This returns the value before incrementing.*/
/*Prefix: the operator comes before the operand (++y). Using it as a prefix returns the value after incrementing.*/


//Postfix example:
//Here is a Postfix example:
/*"Y" is set to the value before incrementing and it adds 1 to F. */

let f = 0;  // f = 0
y = f++;  // y = 0 e f = 1
console.log(f, y);  


/*Be careful about resetting values when using Postfix
*/
let z = 5;  // z = 5
console.log(z);
z = z++;  // z = 5
console.log(z);




//Here is Prefix example:
/*"T" is set to the value after incrementing and it adds 1 to T.
*/
//Prefix example:
let g = 0;  // g = 0
t = ++g;  // t = 1 e g = 1
console.log(g, t);

/*W is set to the value after incrementing.
*/
let w = 2; // W = 2
console.log(w);
w = ++w;  // w = 3
console.log(w);

