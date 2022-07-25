//!!Declarando variável!!
/* Variável var
*/

/*Nesse exemplo uma variável dentro de um bloco de código que não seja uma função não faz diferente alguma.
*/
{
    {
        {
            {
                var sera = "sera???";
                console.log(sera);
            }
        }
    }
}
console.log(sera);


/*Nesse exemplo a variável está definito no escopo demtro da função e não fora da função*/
function teste() {
    var local = 123;
    console.log(local);
}

teste();
console.log(local);

/*Evite criar variáveis que vão para o escopa local
*/
