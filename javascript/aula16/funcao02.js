function soma(n1=0, n2=0) { // Quando eu digo que n1=0 e n2=0, se eu deixar de passar algum parâmetro ao chamar a função, não vai dar NaN. É necéssário colocar esses parâmetros adicionais.
    return n1 + n2
}
console.log(`O resultado é ` + soma(7, 3))
console.log(`A soma dos valores é ${soma(7, 3)}`)