/*Array é uma maneira de agrupar 
multiplos valores de forma linear
dentro de uma única estrutura com um
único identificador, diferente de uma
variável que possui apenas um valor por
vez. Essa é uma estrutrura indexada 
que consegue ser acessada através de 
números que se inicia apartir do 
index zero até o último valor. 
*/
/*No JavaScript uma Array é uma 
estrutura heterogênea porque é
fracamente tipada, considerando isso 
podemos adicionar e misturar vários 
tipos dentro de uma Array.
*/

/*Devemos priorizar Array's com dados
homogeneos
*/

const valores = [7.7, 8.9, 6.3, 9.2]; //Declarando array de forma literal.

/*Aqui é uma das maneiras que podemos
utilizar o valor de uma Array.
*/ 
console.log(valores[0], valores[3]);


/*Cuidado ao chamar um valor de index 
que não existe em JavaScript porque a 
linguagem nao retorna um erro, e sim o
valor "undefined".
*/
console.log(valores[4]); 


/*Podemos adicionar um valor para um index específico, da seguinte forma:
*/
valores[4] = 10; 
console.log(valores);

/*Para saber a quantidades de elementos de um Array, podemos usar a property
"length".
Exemplo:
*/
console.log(valores.length);

/*Existe uma função chamada ".push" para
adicionar novos elementos a um Array.
Exemplo:
*/
valores.push({id: 3}, false, null, 'teste');
//No exemplo foi usado um Objetto, boolean, valor nulo e String.
console.log(valores);

/*Podemos usar uma função chamada ".pop"
que retira/exclui o último valor da array e retorna esse valor.
Exemplo:
*/
console.log(valores.pop());

/*Podemos também utiliza o delete para
excluir o elemento de uma array.
Exemplo: 
*/
delete valores[0];

//Descobrindo o tipo de uma Array.
console.log(typeof valores);
