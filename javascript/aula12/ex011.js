function verificar() {
    var anos = document.getElementById('iidade')
    var idade = anos.value
    var res = document.querySelector('#res')
    if (idade < 16){
        console.log('Não vota')
        res.innerHTML = 'Não vota'
    } else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto facultativo')
        res.innerHTML = 'Voto facultativo'
    } else {
        console.log('Voto obrigatório')
        res.style.textAligh = 'center'
        res.innerHTML = 'Voto obrigatório'
    }
}
