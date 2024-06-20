window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');


function somar(){
   let final = Number(numero1.value) + Number(numero2.value);

   resultado.value = final;

}
function multiplicacao(){
    let final = Number(numero1.value) * Number(numero2.value);

    resultado.value = final;

}
function divisao(){
    let final = Number(numero1.value) / Number(numero2.value);
    
    resultado.value = final

}
function subtracao(){
    let final = Number(numero1.value) - Number(numero2.value);

    resultado.value = final

}