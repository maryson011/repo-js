// Nome, Preco, Desconto (0-1), Função precoComDesconto

type Produto = {
    nome: string,
    preco: number,
    desconto: number,
    precoComDesconto: () => number
}

const p1: Produto = {
    nome: 'Notebook',
    preco: 2000,
    desconto: 0.1,
    precoComDesconto() {
        return this.preco * (1 - this.desconto)
    }
}

console.log(p1.precoComDesconto())