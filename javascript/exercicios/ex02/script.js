function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('rdsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/garoto.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/garota.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        // res.style.textAligh = 'center' // não funcionou
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // comando para mostrar a imagem
    }
}