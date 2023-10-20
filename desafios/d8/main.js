var medida = document.querySelector('div#medidas')
function desconto() {
    var pdComprado = prompt("Qual produto você esta comprando?")
    var preco = Number(prompt(`Qual o preço do seu ${pdComprado}`))
    var desconto = preco * (10 / 100)
    var pTotal = preco - desconto

    medida.innerHTML = `<p> O preço original era R$ ${preco} </p>`

    medida.innerHTML += `<p> Voce acaba de ganhar ${desconto.toFixed(2)} de desconto (-10%) </p>`

    medida.innerHTML += `<p> No fim,você vai pagar R$ ${pTotal.toFixed(2)} no produto ${pdComprado} </p>`
}