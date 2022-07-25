/*Nesse exeplo usamos a variável Var para criar uma estrutura For, 
por consequência a variável ficará visivel fora do escopo local.
*/
for (var i = 0; i < 10; i++) {
    console.log(i);
}



/*já no exemplo abaixo usamos usamos a variável Let para criar uma
estrutura For, como consequência a variável não estará disponivel
fora do Escopo Local.
*/

console.log("i =", i);

for (let y = 0; y < 10; y++) {
    console.log(y);
}

//console.log("i =", y);
