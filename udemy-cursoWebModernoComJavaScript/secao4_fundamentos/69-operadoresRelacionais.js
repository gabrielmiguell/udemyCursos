//Operadores: Relacionais 

/*The Relational Operators are known as Comparison Operators. 
They are used to find the relationship between two values or compare 
relationship between two values; on comparion they yield the result true or False.

    < ; Less than Operator
    >; Greater than Operator

    <=; Less Than or equal to Operator
    >=; Greater Than or Equal to Operator

    ==; Equal to Operator
    !=; Not Equal to Operator
 
    ==; Strictly Equal to Operator;
    !==; Strictly Not Equal to Operator;



*/

console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 === d2); /* Quando trabalhamos com referência de memoria não fará
diferencia usar Equal or Strictly Equal porque ele comparará o endereço na memória e não o valor em sí.
*/
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13', undefined === null);




