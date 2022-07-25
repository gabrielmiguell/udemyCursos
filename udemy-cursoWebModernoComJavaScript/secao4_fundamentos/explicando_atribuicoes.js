/*!!Atribuição por Valor!!
acontece quando trabalhamos com tipos 
primitivos. Nesse caso, quando atribuimos o
valor de uma variável para outra estámos
fazendo uma "cópia por valor"; onde uma cópia
do valor é passado para a outra variável. É o 
oposto de apontar para um endereço na memória 
onde o valor está armazenado na memória. 

Exemplos:
*/
let c = 3;
let d = c;
d++ //Adicionando um para a variáel.
console.log(d, c);

/*!!Atribuição por Referência!!
acontece
quando trabalhamos com objetos e funções.
Quando atribuimos valores que não são 
primitivos para uma variável, estamos fazendo
a variável apontar para o endereço onde o valor
está amazernado na memória. 
Exemplos:
*/
const a = {name: 'Teste'};
console.log(a);

/*Se atribuimos o valor de uma variável para
outra, embaixo do capus na realidade estamos
apontando a variavel para o mesmo endereço na
memória onde o valor esta localizado.
*/

const b = a;
console.log(b);

/*Se eu mudar o valor pela a const b a const a
também modifica o valor.
Exemplo:
*/
b.name = 'Opa';
console.log(a, b);



