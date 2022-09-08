/* Operador Ternário
* Os Operadores Ternários são compostos por três partes:
* Expressão + ? 'Se' + : 'Se não'
*
*/


const resultado1 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado1(8.6));


const resultado2 = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado2(7.1));
console.log(resultado2(4));


