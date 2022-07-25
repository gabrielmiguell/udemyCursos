/*Nessa atividade estaremos aprendendo como
a criar objetos em JavaScript.
*/

/*Para criar um Objeto de forma literal devemos usar par de chaves como no exemplo abaixo.
Exemplo:
*/
/*Aqui criamos um Objeto vazio e fomos adicionando atributos para o objeto.
*/
const prod1 = {};
//Maneira de adicionar atributos para um Objeto.
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 // Evitar atribuitos com espaços.

console.log(prod1);


/*Outra forma de criar um Objeto é com a
notação literal, e já criar "chave" e "valor" dentro do prórpio objeto.
Exemplo:
*/
const prod2 = {
    nome: 'Camia Pole',
    preco: 79.90,

    //Posso criar um oejto dentro de outo objeto.
    obj: {
        blabla1: 1,
        blabla2: 5,

    }
};

console.log(prod2);

