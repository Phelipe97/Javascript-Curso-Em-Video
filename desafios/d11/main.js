var info = document.getElementById('info')
var botao = document.getElementById('botao')
botao.addEventListener('click', verifica)

function verifica() {
    let ano = Number(prompt('Qual o ano que sera verifico ?'))

    info.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`

    if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
        info.innerHTML += `<p>Esse ano de ${ano} <strong class="verde">e Bissexto \u{2705}</strong></p>`
    } else {
        info.innerHTML += `<p>Esse ano de ${ano} <strong class ="vermelho">Não e Bissexto \u{274C}</strong></p>`
    }

}