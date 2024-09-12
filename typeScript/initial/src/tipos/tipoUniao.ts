let nota: number | string = 10
console.log(nota)
nota = 'A+'
console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D'
let n1: NotaOuConceito = 7
console.log(n1)
n1 = 'A'
console.log(n1)