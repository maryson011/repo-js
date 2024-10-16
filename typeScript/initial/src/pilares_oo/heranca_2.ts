interface Entidade {
    id: number
}

interface Vendavel {
    nome: string
    preco: number
    desconto: number
}

class Produto implements Entidade, Vendavel {
    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly preco: number,
        public readonly desconto: number,
    ) {}

    get precoFinal() {
        return this.preco * (1 - this.desconto)
    }
}

class Servico implements Entidade, Vendavel {
    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly preco: number,
        public readonly desconto: number,
    ) {}
}

const p1 = new Produto(1, 'Caneta', 10.9, 0.01)
console.log(p1)
console.log(p1.precoFinal)

let v1: Vendavel = new Produto(2, 'Lapis', 21, 0.1)
console.log(v1)

v1 = new Servico(3, 'Seguro', 60.32, 0.2)
console.log(v1)

export {}