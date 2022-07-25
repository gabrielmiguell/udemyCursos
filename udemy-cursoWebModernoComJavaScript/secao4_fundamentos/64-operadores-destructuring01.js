// Destructuting - Novo recurso do ES2015

//Usando o Recurso Destructuring em Objetos


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

/*Como ter acesso as variáveis "nome" e "idade" dentro do
Objeto?
Poderiamos usar a Anotação Ponto ou podemo usar o 
Operador Destructuring.
    Exemplos:
*/
const { nome, idade } = pessoa;
console.log(nome, idade);

/*Podemos para facilitar mudar o nome das variáveis
como no exemplo abaixo:
*/
const { nome: n, idade: i } = pessoa
console.log(n, i);

/*Caso for tirado algum atributo que não existe no Objeto,
o JavaAcript por padrão retorna Underfined. Para não correr
o risco e evitar que umas das variáveis voltem com 
Underfined, ppodemos definir um Valor Padrão.
*/
const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);


/*Tome cuidado ao desestruturar um dado alinhado, antes de
realizar confirme se o caminho até o dado está livre(está 
realemte citado) para que apenas o último dado retorne Nulo
ou Underfined. Mas não o filho daquele dado para não retonar 
um Erro. Como na Estrutura Abaixo.
*/
// Exemplo:

const { conta: { ag, num} } = pessoa; /*Tanto "conta"(Dado pai)
quanto "ag" e "num"(Dados Filhos) não foram definidos, então 
consequentemente o programa voltará um erro.
*/
console.log(ag, num);
