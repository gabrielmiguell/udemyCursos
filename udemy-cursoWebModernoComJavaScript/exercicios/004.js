/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês 
* correspondente como uma string. Por exemplo, se a entrada for 2, 
* a função deverá retornar "fevereiro", pois este é o 2° mês.
*
*   Exemplos:
*   nomeDoMes(1) // retornará "janeiro"
*   nomeDoMes(4) // retornará "abril"
*
*
*/



function nomeDoMes(numeroDoMes){
    const meses = ["Undefined",
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"];

    const text = "Olá, você digitou o número " + numeroDoMes + ". " + "Esse número corresponde ao mês de " + meses[numeroDoMes] + ".";
    //const text2 = "Muito obrigado por utilizar nossos serviços. Até a próxima!!";

    return text;
    //console.log(text2);

    
}

console.log(nomeDoMes(06));

