/*Se a variável declarada não 
estiver dentro de uma fusão 
ela será global, já no oposto
ela se torna local.
*/
var numero = 1;

{
    var numero = 2;
    console.log('Dentro =', numero);

}
console.log('fora =', numero);


