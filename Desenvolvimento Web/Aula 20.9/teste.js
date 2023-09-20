var first = 12;
let segunda = "aahhh sim";
const terciaria = ['carros', 'pc', '1347'];

console.log(++first)
console.log(typeof(first))

segunda += ' entendi'

console.log(segunda)
console.log(typeof(segunda))

console.log("tst: " + terciaria)
console.log(typeof(terciaria))
// terciaria = 8
terciaria[0] = 7
terciaria[5] = 98
console.log(terciaria)

console.log ("tamanho da 3 = " + terciaria.length)
console.log(terciaria[4])

let quarta = {
    teste1: 1,
    teste2: 45,
    entendi: 998759,
}

console.log(quarta)
console.log(quarta.entendi)

quarta.terceeeira = 'nada'

console.log(quarta)
console.log(quarta.terceeeira)

function fala_comigo(entrada) {
    console.log('Redebi a func. : ' + entrada)
    return entrada + 3**first
} 

x = fala_comigo('entendi como funciona')
console.log(x)

const func = function() {
    console.log('func atribuida')
}

func()

const arrow = () => [
    console.log("setinha")
]

arrow()





