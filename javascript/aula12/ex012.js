
// hora = 6 // Para testar
function msg(){
    var hoje = new Date();
    var hora = hoje.getHours() + ':' + hoje.getMinutes() + ':' + hoje.getSeconds();
    // console.log(`São exatamente ${hora}.`);
    var titulo = document.getElementsByName('h1')[0]

    if (hora >= 0 && hora < 6){
        console.log('Boa madrugada')
        titulo.innerText = `São exatamente ${hora}.`
    } else if (hora >= 6 && hora < 12){
        console.log('Bom dia')
        titulo.innerText = `São exatamente ${hora}`
    } else if (hora >=12 && hora < 18){
        console.log('Boa tarde')
        titulo.innerText = `São exatamente ${hora}`
    } else {
        console.log('Boa noite')
        titulo.innerText = `São exatamente ${hora}`
    }
}
