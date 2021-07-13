const user = {
    name: 'Guilherme',
    lastName: 'Rebello'
};

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Juntar propriedades de objetos
Object.assign(user, {fullName: 'Guilherme André Rebello'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto unindo dois ou mais objetos', Object.assign({}, user, {age: 31}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Guilherme'};
Object.seal(person);
