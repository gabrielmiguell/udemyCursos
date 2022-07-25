//links: https://www.programiz.com/javascript/comparison-logical


/*Operadores Lógicos/Logical Operators
It perform Logical Operations: AND, OR and NOT.
Logical Operators are used to determine the Logic between variables or values.


--- NOTE: YOU CAN ALSO USE LOGICAL OPERATORS WITH NUNBERS. IN JAVASCRIPT, 0 IS FALSE
AND ALL NON-ZERO VALUES ARE TRUE. 


*/
/*  
Operador "E"
    V e V -> V
    V e F -> F
    F e ? -> F


-------------------------------------------------------------------------------
Operador "OU"
    V ou ? -> V
    F ou V -> V
    F ou F -> F

-------------------------------------------------------------------------------
Operador "Ou Exclusivo"
    V Ou Exclusivo V -> F
    V Ou Exclusivo F -> V
    F Ou Exclusivo V -> V
    F ou Exclusivo F -> F

-------------------------------------------------------------------------------    
Negação Lógica
    !V -> F
    !F -> V


*/

/*&& Logical AND: TRUE if both the operands/Boolean values 
are TRUE, else evaluates to FALSE.
*/

let x = 6; let y = 3;
const a = true, b = false, c = 4;

console.log("------------");
console.log("LOGICAL AND");
console.log(x < 10 && y > 1);
console.log(true && false);
console.log("-----//-------");
console.log(a && a); //TRUE
console.log(a && b); //FALSE
console.log((c > 2) && (c < 2)); //FALSE


/*Logical OR: True if either of the operands/Boolean
 values is TRUE. Evalueates to FALSE if both are FALSE
*/
console.log("------------");
console.log("LOGICAL OR")
console.log(x == 5 || y == 5);
console.log(true || false);
console.log("-----//-------");
console.log(a || b); //TRUE
console.log(b || b); //FALSE
console.log((c>2) || (c<2)); //TRUE


/*Logical NOT: TRUE if the operand is FALSE and VISE-VERSA.
*/
console.log("------------");
console.log("LOGICAL NOT")
console.log(!(x == y));
console.log(!true);
console.log("-----//-------");
console.log(!a); //false
console.log(!b); //true





function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //Bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; //Operador Unário  

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log("--------------------------")
console.log(compras(true, true));
console.log("--------------------------")
console.log(compras(true, false));
console.log("--------------------------")
console.log(compras(false, true));
console.log("--------------------------")
console.log(compras(false, false));