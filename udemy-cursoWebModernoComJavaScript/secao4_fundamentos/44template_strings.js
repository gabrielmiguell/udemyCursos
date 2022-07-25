const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; // Primeira maneira de concatenar Strings.

/*A segunda maneira é com um Template String, usamos a Crases (``) para representar um template String.
*/
const template = `
    Olá
    ${nome}!`; //Considera as quebras de linha. 
console.log(concatenacao, template);

//Expressões...
console.log(`1 + 1 = ${1 + 1}`);

//Crimaos aqui uma função.
const up = texto => texto.toUpperCase();

/*Podemos chamar uma fução dentro de um template String.
*/
console.log(`Ei... ${up('cuidado')}!`);


