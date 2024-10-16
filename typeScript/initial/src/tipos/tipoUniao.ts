let nota: number | string = 10
console.log(nota)
nota = 'A+'
console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D'
let n1: NotaOuConceito = 7
console.log(n1)
n1 = 'A'
console.log(n1)

function imprimirNota(nota: NotaOuConceito) {
    if (typeof nota == 'number') {
        console.log(`Nota ${nota}`)
    } else {
        console.log(`Conceito ${nota}`)
    }
}

n1 = 9.5
imprimirNota(n1)
n1 = 'A'
imprimirNota(n1)