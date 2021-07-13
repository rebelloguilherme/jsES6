let user = {
    name: 'Guilherme'
};

console.log('Mostrando valor do objeto user.name:', user.name);

//Alterando a propriedade de um objeto
user.name = 'outroNome 1';
console.log('Mostrando o objeto user após a atribuição de outroNome 1:', user);

user['name'] = 'outroNome 2';
console.log('Mostrando o objeto user após a atribuição de outroNome 2:', user);

const prop = 'name';
user[prop] = 'outroNome 3';
console.log('Mostrando o objeto user após a atribuição de outroNome 3:', user);

//Criando uma propriedade
user.lastName = 'Rebello';
console.log('Mostrando valor do objeto user.lastName após a criação e atribuição de sobrenome:', user.lastName);

//Deletando uma propriedade
delete user.name;
console.log('Mostrando o objeto user após a propriedade name ser deletada:', user);
