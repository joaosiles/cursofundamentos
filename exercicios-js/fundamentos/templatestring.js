const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log (`1 + 1 = ${1 + 1}`)  // soma apenas o que está entre ${}

const up = texto  => texto.toUpperCase()   // const up é a criação da função e onde está sendo atribuida a função arrow
console.log (`Ei... ${up('cuidado')}!`)