let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo) // ! = negação  !! = negação da negação

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])  // array
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('finalizando...')
console.log(!!('' || null || 0 || ' ')) // avalia cada um dos elementos

console.log('exemplo prático disso')

let nome = ''
console.log(nome || 'Desconhecido') // imprime o segundo já que o nome deu falso
