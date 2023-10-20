var texto = document.querySelector('div#texto')
var botao = document.querySelector('input#botao')
botao.addEventListener('click',calcula)

function calcula() {
    let a = Number(prompt('Qual o valor de a?'))
    let b = Number(prompt('Qual o valor de b?'))
    let c = Number(prompt('Qual o valor de c?'))
    let Δ =  b*b-4*a*c

    texto.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    texto.innerHTML += `<p>A equação atual é ${a}x²+${b}x+${c}=0</p>`
    texto.innerHTML += `<p>O cálculo realizado será Δ =${b}²-4.${a}.${c}</p>`
    texto.innerHTML += `<p>O valor valculado foi <mark>Δ =${Δ}.</mark></p>`
}