const num = document.querySelector("#fnum")
const add = document.querySelector("#add")
const list = document.querySelector("#flist")
const res = document.querySelector("#res")
const fim = document.querySelector("#finish")
let valores = []

//adição de numeros
add.addEventListener("click",()=>{
    if (isNumber(num.value) && !inList(num.value,valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML =''
    }else{
        alert("Valor invalido ou ja encontrado")
    }
    num.value = ''
    num.focus()
})

function isNumber(n) {
    if (Number(n)>=1 && Number(n)<=100) {
       return true 
    }else{
        return false
    }
}

function inList(n,l) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    }else{
        return false
    }
}

fim.addEventListener('click',()=>{
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]>maior) {
                maior = valores[pos]
            }
            if (valores[pos]<menor) {
                menor = valores[pos]
            }

        }
        media = soma /total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} de elementos</p>`
        res.innerHTML += `<p>O maior valor dos elementos e ${maior} </p>`
        res.innerHTML += `<p>O menor valor dos elementos e ${menor} </p>`
        res.innerHTML += `<p>A soma de todos os elementos e ${soma} </p>`
        res.innerHTML += `<p>A média de todos os elementos e ${media} </p>`
    }
})
