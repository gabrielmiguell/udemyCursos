/*Nesse exemplo o Array retornará todos os valores dos indexs
diferentes porque há escopo de bloco e o let permite armazenar
o idereço de cada index na memória. 
*/

const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })

}

funcs[5]();
funcs[1]();
