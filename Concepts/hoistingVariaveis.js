function fn() {
    console.log(text); //vai apresentar undefined pois não foi atribuido nenhum valor, por conseq. não definiu o tipo da var.

    var text = 'Exemplo';
    
    console.log(text);
}

fn();

// function fn() {
//     var text;
//     console.log(text);
    
//     text = 'Exemplo';

//     console.log(text);
// }