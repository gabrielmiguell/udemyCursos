/*Hoisting é um padrão do JavaScript
de mover uma declarção para o topo.
*/
/*No exemplo abaixo, a variável foi chamada antes de
ser declarada porém em JavaScript há o
hoisting(Isamento, elevação) que eleva a variável
para cima no programa. Desta maneira, não permite
ocorrer um erro na hora da execução idependente se
é dentro ou fora de uma função.
*/

console.log('a =', a);
var a = 2;
console.log('a =', a);




function teste() {
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
};

teste();


/*----------------------------------------------
---*/

/*Já com Let o efeito de Hoisting não funciona.
*/

let b = 2;
console.log('b =', b);


/*Não trás benefícios usar o Hoisting porque vc
acaba permitindo o JavaScript fazer manipulações
idesejadas.
*/

