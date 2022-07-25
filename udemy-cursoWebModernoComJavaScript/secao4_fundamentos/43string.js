/*"String" é uma cadeia de
caracteres que pode ser delimitado 
com Aspas Duplas, Simples e "Crases".
*/

const escola = "Cod3r";

console.log(escola.charAt(4));  /*Essa sentença de código vai escolher caractére 4 da Const Escola e imprimi-lá.
*/
console.log(escola.charAt(5));  /*Essa sentença de código vai escolher caractére 5 da Const Escola e imprimi-lá.
*/
console.log(escola.charCodeAt(3)); /*Pega o o códogo do núemro 3 na tabela ASCII
*/
console.log(escola.indexOf('3')); /* Mostra o index 3 da String

*/

console.log(escola.substring(1)); /*Pega uma String e cria uma substring que podemos usar como no exemplo mostrado aqui
*/
console.log(escola.substring(0, 3));  /*Pega uma String e cria uma substring que podemos usar como no exemplo mostrado aqui
*/

console.log('Escola '.concat(escola).concat("!")); /*Concatena uma cadeia de caractéres
*/
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e'));  /*Vai substituir o caractere 3 para 'é'.
*/

console.log('Ana, Maria, Pedro'.split(',')); //Transforma em um array



