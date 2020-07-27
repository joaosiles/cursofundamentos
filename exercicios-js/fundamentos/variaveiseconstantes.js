var a = 3 // declarando variavel com var
let b = 4 // declarando variavel com let (recomendável por ser mais moderna)


var a = 30 // var pode ser redeclarada duas vezes
b = 40 // let é declarada uma única vez

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5  //declaração de constante, usar pra coisas que não tem motivo pra mudar (indicado para functions)
// c = 50  // não consegue reatribuir valor
console.log(c)