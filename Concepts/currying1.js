function somaCurrying(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = somaCurrying(2); //função esta recebendo 2 como primeiro parâmetro(a)

console.log(soma2(10)); // função soma2 recebe 10 que será atribuido a variável (b) e retornará a + b