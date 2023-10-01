function carregar() {
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML=`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src='imagens/manhaWeb.png'
        document.body.style.background='#ffe7cf'
    }else if (hora <=18) {
        //BOA TARDE
        imagem.src='imagens/tardeWeb.png'
        document.body.style.background='#e17619'
    } else {
        // BOA NOITE
        imagem.src='imagens/noiteWeb.png'
        document.body.style.background='#162e47'
    }
}
