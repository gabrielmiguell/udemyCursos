/*Nesse exemplo o Array retornará todos os index 10
porque a variável Var não possui escopo.
*/
const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();
