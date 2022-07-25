const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger((peso2)));  //Usamos .isInteger() para descobrir se é um número inteiro. 

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));  //Usa-se o .toFixed() para reduzir casas decimais.

console.log(media.toString());  //Usa-se .toString para transformar um número em uma String.
console.log(typeof media);  //Usa-se "typeof" para mostrar o tipagem do arquivo.


