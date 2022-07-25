

console.log(Math.ceil(6.1))/*Definindo que "Math" é um OBJETO
dentro do JavaScript. Aqui usamos um Anotação Ponto para
acessar uma fução dentro de um objeto.  
*/


/*Para criar dinamicamente um atributo dentro
de um objeto, usamos a Anotação Ponto. Mesmo que o atributo não
esteja dentro do Objeto ele é criado dinamicamente.
Como nos exemplos abaixo:
*/
const obj1 = {}
obj1.nome = 'Bola' 
// obj1['nome'] = 'Bola2'
console.log(obj1.nome);


/*A Anotação Ponto é muito importante para
a organização do JavaScript. 
Sempre acessamos os membros de um objeto
através de Anotação Ponto.
*/

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
