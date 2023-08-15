var hoje = new Date();
var hora = hoje.getHours() + ':' + hoje.getMinutes() + ':' + hoje.getSeconds();
console.log(`São exatamente ${hora}.`);

// hora = 6 // Para testar

if (hora >= 0 && hora < 6){
    console.log('Boa madrugada')
} else if (hora >= 6 && hora < 12){
    console.log('Bom dia')
} else if (hora >=12 && hora < 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}