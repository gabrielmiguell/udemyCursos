// par nome/valor
/*Contexto léxico é o contexto/local no qual sua variável 
foi definida fisicamente no código.
Léxico tem haver com palavra.
*/
/*Dentro de um programa há vários contextos léxicos
sendo execultado. 
Exemplo:
    Uma Função tem outro contexto léxico, assim as
    variáveis que estão dentro dela terão prioridades dentro
    desse contexto. Quando não encontrado dentro desse contexto,
    o programa vai procurar no contexto léxico externo. Se mesmos
    assim não encontrado, ocorre um erro no execulção do programa.
*/

const saudacao = 'Opa'; //contexto léxico 1

function exec() {
    const saudacao = 'Falaa'; //Contexto léxico 2
    return saudacao
};

/*Objetos são grupos aninhado de pares nome/valor
*/
const cliente = {//Contexto Léxico 3
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { //Contexto Léxico 4
        logradouro:'Rua Muito Legal',
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);