/*Como usar os tipos Bollean em JavaScript
*/
/*JavaScript não apenas aceita números
como também aceita "true" e "false" como
 também as seguintes coisas.
*/

let isAtivo = false; //Literal "false" para definir falso.
console.log(isAtivo);

isAtivo = true; //Literal "true" para definir true.
console.log(isAtivo)

/*Quando adicionamos !! na frente da variavel é "revelado" seu valor booleano e quando adicionamos ! na frente da variavel duas coisas acontecem: seu valor booleano é revelado e também invertido.
*/

console.log('Os verdadeiros...');
isAtivo = 1;
console.log(!!isAtivo);
console.log(!!3);
console.log(!!3);
console.log(!!-1);
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(undefined);
console.log(!!(isAtivo = false));



//Expresão Lógica com o "Ou"
//Usando "||" igual a "Ou" na prática.

console.log('Para finalizar...');
console.log(!!('' || null || 0 || 'd'));
/* Se alguns deles forem verdadeiro o resultado retornarar True ou o inverso.
*/

let nome = '';

/*Criando valor padrão/reserva para uma sentença de código. Aqui nesse caso, se a variável estiver vazia ele retornará o valor padão que foi definido.
*/
console.log(nome || 'Desconhecido');


