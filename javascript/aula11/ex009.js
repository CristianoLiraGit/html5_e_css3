function verificar(){
    var país = document.getElementById('nacionalidade')
    var res = document.getElementById('res')
    var nacio = país.value.toUpperCase()
    res.innerHTML = `<p>Nacionalidade informada é <strong>${nacio}</strong>.</p>`
    if (nacio != 'BRASIL'){
        res.innerHTML += `<p>Você é estrangeiro!</p>`
    } else {
        res.innerHTML += '<p>Você é brasileiro!</p>'
    }
}

/*
var país = 'Argentina
console.log(`Vivendo em ${país}.`)
if (país != 'Brasil') {
    console.log('Você é estrangeiro!')
} else {
    console.log('Você é brasileiro!')
}
*/