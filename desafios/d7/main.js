var dolarAtual = Number(prompt("Antes de mais nada.Qual a cotação do dolar agora?"))
var realAtual = 1/dolarAtual
var medida = document.querySelector('div#medidas')
function converter() {
   var realInfo = Number(prompt("Quantos R$ você tem na carteira"))
   var realConvertido = realInfo*realAtual
   medida.innerHTML = `Voce tem ${realConvertido.toFixed(2)} US$`
}