function calcula() {
    var produto = prompt('Que produto você esta comprando')
    var preco = prompt(`Quanto custa o ${produto} que você esta comprando?`)
    var valorDado = prompt(`Quanto vocẽ deu para pagar o ${produto} ?`)
    var troco = valorDado - preco
    alert(`Você comprou ${produto} que custou R$ ${preco}.Voce deu R$ ${valorDado} em dinheiro e vai receber R$ ${troco}.Volte Sempre.`)
}