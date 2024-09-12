let number = parseFloat(prompt('Digite um número:'))
let multiplier = 1
let result = ''

for (multiplier; multiplier <=20; multiplier++) {
    result += `${number} x ${multiplier} = ${number * multiplier}\n`
}
alert(`Os resultados das multiplicações pelo seu número são:
    
${result}    
`)