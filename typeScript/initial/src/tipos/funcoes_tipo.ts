type OperacaoFn = (a: number, b: number) => number

let operacao: OperacaoFn

function somar(n: number, n2: number): number {
    return n + n2
}

function multiplicar(n: number, n2: number): number {
    return n * n2
}

operacao = somar
console.log(operacao(2, 4))
operacao = multiplicar
console.log(operacao(2, 4))