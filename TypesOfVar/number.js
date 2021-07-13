const myNumber = 12.4032;

//Transformar número para string (cast)
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);

//Retorna número com um número de casas decimais
const fiexedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fiexedTwoDecimals);

//Transforma uma string em float
console.log('\nString parsed to float:', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parsed to int:', parseInt('13.20'));