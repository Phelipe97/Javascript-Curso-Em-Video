function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('Verifique se os dados estão corretos e verifique novamente');
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','imagensPerfil/bebe-menino-perfil.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','imagensPerfil/homem-jovem-perfil.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagensPerfil/homem-adulto-perfil.png')
            }else{
                //idoso
                img.setAttribute('src','imagensPerfil/homem-velho-perfil.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','imagensPerfil/bebe-menina-perfil.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','imagensPerfil/mulher-jovem-perfil.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagensPerfil/mulher-adulta-perfil.png')
            }else{
                //idoso
                img.setAttribute('src','imagensPerfil/mulher-velha-perfil.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}