function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        img.src = 'dia.jpg'
        document.body.style.background = '#85c0e8'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#c9aa70'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#102131'
    }
}