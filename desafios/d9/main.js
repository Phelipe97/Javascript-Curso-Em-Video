var texto = document.querySelector('div#texto')
var botao = document.querySelector('input#botao')
botao.addEventListener('click', reajuste)

function reajuste() {
    var nome = prompt("qual o nome do funcionario")
    var salario = Number(prompt(`Qual o salario de ${nome}`))
    var reajuste = Number(prompt(`O salario de ${nome} vai ser reajustado em qual porcentagem`))
    var porcentagem = salario * (reajuste / 100)
    var novoSalario = salario + porcentagem

    texto.innerHTML = `<p class="ola"> ${nome} recebeu um aumento salarial!</p>`
    texto.innerHTML += `<p>O salario era de R$ ${salario}</p>`
    texto.innerHTML += `<p>Com o aumento de ${reajuste}%,o salario vai aumentar R$ ${porcentagem.toFixed(2)} no proximo mês.</p>`
    texto.innerHTML += `<p>A partir daí, ${nome} vai passa a ganhar R$ ${novoSalario.toFixed(2)}.</p>`
}