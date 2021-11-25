/*
function fn() { //com variaveis
    console.log(text);

    var text = 'exemplo';

    console.log(text);
}

fn();
*/


function fn() { //com variaveis, fn é o nome
    log('hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();
