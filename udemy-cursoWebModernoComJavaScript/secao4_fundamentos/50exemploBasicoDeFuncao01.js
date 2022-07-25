/*Nesse aula falaremos sobre fuções.
*/

/*U,a função é um verbo; 
uma ação, ela execulta um processo
baseado na sequência de código.


/*Função é um trecho de código que 
você nomeou para poder reutilizar
ao longo da aplicação.
*/

/*A fução recebe parâmetros de entrada
e execulta o passo a passo, toda a 
sequência de código e no final retorna
um valor. 
Uma fução pode não receber nenhum
parâmetro, não retornar dados, pode
receber dados de entrada e retornar 
ou não.
*/
/*Coloque bons nomes em funções.
*/


/*!!FUNÇÃO SEM RETORNO!!
//Pesquisar os dois tipos de funções!!!!
Exemplo:
*/
function imprimirSoma(a, b) {
    console.log(a + b);

}

imprimirSoma(2, 3);
/*Quando definimos apenas um
parametro, o que não está definido
estará definido como padrão como Underfined.
Então se somamos os dois o valor será retornado
como NaN(Not a Number).
*/ 
imprimirSoma(2); 

/*Nesse caso, a fução usará apenas os dois 
primeiros parãmetros e ignorará o restante.
*/
imprimirSoma(2, 10, 34, 48, 90, 10);



/*!!FUÇÃO COM RETORNO!!
*/
/*Podemos tratar ou deixar um valor como
padrão, como fizemos no exemplo abaixo.
*/
function soma(a, b = 0)/*b com valor padrão 0.*/ {
    return a + b
};
console.log(soma(2,3));
console.log(soma(2));
console.log(soma());

