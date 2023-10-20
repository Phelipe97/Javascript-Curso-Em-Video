var a = document.getElementById('btn')
var b = document.getElementById('btn2')
var c = document.getElementById('btn3')

a.addEventListener('click',botao1);
b.addEventListener('click',botao2);
c.addEventListener('click',botao3);

function botao1() {
   alert('Você clicou no botâo 1')
}
function botao2() {
    alert('Você clicou no botâo 2')
}
function botao3() {
    alert('Você clicou no botâo 3')
}