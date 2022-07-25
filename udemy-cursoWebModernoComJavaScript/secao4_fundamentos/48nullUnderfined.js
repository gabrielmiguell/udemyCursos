/*Atividade explicando sobre Null e Underfineed
*/

/*O valor da seguinte variável é underfined
porque não foi atribuído nada nela.
Exemplo:
*/
let valor; //Não inicializada.
console.log(valor);

/*Aqui nessa chamada para a seguinte variável é 
"is not defined", e é diferente de underfined
porque no "is not defined" a variável nem
foi declarada.
Exemplo:
*console.log(valor2); 
*/

valor = null; //Ausência de Valor
console.log(valor);

/*Quando um programador quer zera um variável
do tipo referência que aponta para um objeto, 
função e essas coisas, devemos uar "null" ao 
invés de underfined. Devemos deixar a linguagem
JavaScript usar "underfined" caso seja o caso.
*/ 

/*Devemos tomar cuidado ao acessar uma variável
"null" porque pode resultar em um TypeError.
Quando uma variável está "null" não é possível acessar nem um membro, fução ou atributo dela.
Exemplos:
*/
// console.log(valor.toString()) //Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evite atribuir underfined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; // Sem Preço ou ainda não foi precificado.
produto.preco = 0 //Já foi precificado mas está gratuito.
console.log(!!produto.preco);
console.log(produto);
