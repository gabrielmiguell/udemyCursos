/*Devemos definir bons nomes 
*para os "Identifiers"
*/
/*Teremos acesso as variáveis 
*através dos Identifiers
*/
/*Atulmente usa-se mais o "let" na 
criação de variável.
*/

let preco = 19.90;
let desconto = 0.4;

//Sem usar variáveis.
console.log(19.90 * 0.6); 

//Usando variáveis,
console.log(preco * (1 - desconto));



//Outro exemplo de como usar variável.
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto);


/*Posso misturar "Strings", "Variáveis"
*e números dentro da mesma sentença de *código.
*/

//Exemplo:
let nome = "Caderno"; //String (Texto) -> Sequencia de símbiolos.
let categoria = "Papelaria";
console.log("Produto: " + nome
    + ", Categoria: " + categoria
    + ", Preço: " + preco
    + ", Descontos: " + desconto 
    + ", Soma: " + (5*5));/* Valor Literal -> Quando colocamos números diretamente na sentencia de código ou bloco de códigos.*/


