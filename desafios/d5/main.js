function converter(){
    var medida = document.querySelector('div#medidas')
    var distancia = Number(prompt('Digite uma distancia em metros(m)'))
    var km = distancia/1000
    var hm = distancia/100
    var dam = distancia/10
    var dm =distancia*10
    var cm =distancia*100
    var mm =distancia*1000

    medida.innerHTML = `<p>A distância de ${distancia} metros,corresponde a ...</p>`
    medida.innerHTML += `<p> ${km.toFixed(3)} quilometros(km)</p>`
    medida.innerHTML += `<p> ${hm.toFixed(3)} hectometro(hm)</p>`
    medida.innerHTML += `<p> ${dam.toFixed(3)} decametro(Dam)</p>`
    medida.innerHTML += `<p> ${dm} decimetro(Dm)</p>`
    medida.innerHTML += `<p> ${cm} centimetro(Dm)</p>`
    medida.innerHTML += `<p> ${mm} melimetro(Dm)</p>`
    
   }