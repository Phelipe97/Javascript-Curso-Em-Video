function converter() {
    var medida = document.querySelector('div#medidas')
    var temperatura = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    var f = temperatura * 1.8 + 32
    var k = temperatura + 273.15

    medida.innerHTML = `<p>A temperatura de ${temperatura} °C,corresponde a ...</p>`
    medida.innerHTML += `<p> ${k.toFixed(2)}°K (Kelvim)</p>`
    medida.innerHTML += `<p> ${f}°F (Fahrenheit)</p>`
}