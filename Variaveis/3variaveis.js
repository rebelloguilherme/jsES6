const name = 'Guilherme';

//não podemos alterar o valor de tipo primitivo
//name = 'Guilherme';

const user = {
    name: 'Guilherme'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Yoda';

//Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Guilherme'
// };

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

//Podemos add novos itens
persons.push('João');
//['Guilherme', 'Pedro', 'Jennifer', 'João']

//Podemos remover algum item
persons.shift();//remove the first element
//['Pedro', 'Jennifer', 'João']

//Podemos alterar diretamente
persons[1] = 'James';
//['Pedro', 'James', 'João']

console.log('\nArray após as alterações: ', persons);