/*A forma de criar Objeto em JavScript é atráves 
de uma função. Conseguimos criar um
Objeto Literal, porém apartir de um objeto posso
instanciar uma função e conseguir suas próprias
váriaveis.
*/

console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());

/*Funções podem possuir atributos
e comportamentos, e essa funções podem
ser instanciadas. Funções Construtoras!!
*/

