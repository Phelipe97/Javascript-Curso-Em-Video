    var res = document.getElementById('res')
    
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar faltam dados...'
        //alert('[Erro] faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Caso digite passo 0 ou numero negativo
        if (p <= 0) {
            alert('[Erro] passo invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem Decrecente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}