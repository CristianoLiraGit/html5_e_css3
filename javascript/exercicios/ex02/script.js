function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    } else {
        // 
    }
}