/*O Let é diferente do Var
quando falamos de Escopo Grobal e
Local porque quando declaramos uma
variável de mesmo nome na global e
local os dois conseguem coexistir.
*/
/*Posso ter uma variável Var no ESCOPO
GLOBA e outra Let dentro do ESCOPO LOCAL.
Quando usamos o Let em ESCOPO local, a 
aplicação vai primeiro sempre procurar 
no ESCOPO local e depois procurar no 
GLOBAL. Exemplo, se tivermos duas variável com
o mesmo nome em ESCOPOS diferentes, e vc chama 
essa variável dentro do ESCOPO LOCAL, a variável
LOCAL terá preferencia.
*/
//Exemplo abaixo!!
var numero = 1; //let numero = 1;

{
    let numero = 2;
    console.log('Dentro =', numero);

}
console.log('Fora =', numero);
