function clicou(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar";    
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.youtube.com"); //abre uma nova guia
    window.location.href = "https://www.youtube.com"; //na mesma pagina
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigada por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}


/*
function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));






//AULA 3-------------
/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/

/*
var count
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while(count <= 5){
    console.log(count)
    count ++;
};
*/

/*
var idade = prompt("qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/



//AULA 2---------------
/*
var frutas = [{nome: "pera", cor:"amarela"}, {nome: "uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "pera", cor:"amarela"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["pera", "laranja", "uva"]
//lista.push("abacaxi");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//alert(lista[0]); 



//AULA 1--------------
//var nome = "Débora Ramos";
//var n1 = 2;
//var n2 = 3;
//var frase = "Brasil é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Brasil", "Canadá")); --da pra fazer desta forma também
