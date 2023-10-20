var info = document.getElementById('info')
var botao = document.getElementById('botao')
botao.addEventListener('click', verificar)

function verificar() {
    let precoAnt = Number(prompt('Qual era o preço anterior do produto ?'))
    let precoAtual = Number(prompt('Qual era o preço atual do produto ?'))
    let paraMais = precoAtual - precoAnt
    let paraMenos = precoAnt - precoAtual
    let variacao = 0

    info.innerHTML = `<h2>Analisando os valores informados.</h2>`

    info.innerHTML += `<p>O produto custava R$ ${precoAnt.toFixed(2)}, e agora custa R$ ${precoAtual.toFixed(2)}</p>`

    if (precoAnt < precoAtual) {
        variacao = ((precoAtual / precoAnt) - 1) * 100

        info.innerHTML += '<p>Hoje o produto esta mais caro</p>'
        info.innerHTML += `<p>O preço subiu R$ ${paraMais.toFixed(2)} em relação ao anterior</p>`
        info.innerHTML += `<p> Uma variação de ${variacao.toFixed(2)}% para cima.</p>`
    } else {
        variacao = ((precoAnt / precoAtual) - 1) * 100

        info.innerHTML += '<p>Hoje o produto esta mais barato</p>'
        info.innerHTML += `<p>O preço caiu R$ ${paraMenos.toFixed(2)} em relação ao anterior</p>`
        info.innerHTML += `<p> Uma variação de ${variacao.toFixed(2)}% para baixo.</p>`
    }

}