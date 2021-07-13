const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2); //it's false, they are unique

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'OutroNome',
    lastName: 'Rebello'
}

console.log(user);

//Symbols criam propriedades que não são enumeráveis
for (const key in user) {
    if(user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`); //just show the lastname because nameSymbol1 and 2 aren't enumerable
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.values(user));

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto', Reflect.ownKeys);

//Criar um enum
const directions = {
    UP : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT : Symbol( 'RIGHT' )
};