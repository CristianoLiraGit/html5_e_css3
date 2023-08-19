/* // 1º bloco de códigos. Apague para testar.
let num = [5, 8, 2, 9, 3]
// console.log(num)
num[3] = 6
// console.log(num.sort()) // imprimi os elementos do array na ordem crescente
num.sort() // A partir daqui os elementos estarão em ordem crescente
console.log(`O array tem ${num.length} elementos.`)
console.log(`O primeiro elemento da lista é ${num[0]}.`)
// num.push(1)
// console.log(num + ` Foi adicionado um valor no final da lista`)
for(pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
*/

// 2º bloco de códigos
/*
let valores = [8, 1, 7, 4, 2, 9]

console.log(valores + ' - Forma padrão de exibição')

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
*/

// 3º bloco de códigos "for in"
/*
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores + ' - Forma padrão de exibição.') 

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
*/

// 4º bloco de códigos
/*
num = [4, 5, 6, 7, 8]

// console.log(num.indexOf(7))
// Se o valor buscado não existir, é retornado o valor -1
let pos = num.indexOf(8)
if (pos == -1){
    console.log('Valor não encontrado.')
} else {
    console.log(`O número pesquisado está na posição ${pos}`)
}
*/

var input = document.getElementById('input');
var btn = document.getElementById('btn_save')
var array = [];
btn.addEventListener('click', function(e){
    array.push(input.value);
    window.alert(`número ${array} cadastrado`)
    
})