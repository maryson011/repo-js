// Produto (id, nome (2 - 250), preco (> 0), desc (0 - 0.8), precoFinal)
// deve ter dados consistentes

import Validador from "./Validador"

class Produto {
    private id: number
    private nome: string
    private preco: number
    private deconto: number

    constructor(id: number, nome: string, preco: number, desconto: number) {
        Validador.maiorQueZero(id, 'Id inválido')
        Validador.entre(nome.length, 2, 250, 'Nome inválido')
        Validador.menor(preco, 0, 'Preço inváldo')
        Validador.entre(desconto, 0, 0.8, 'Desconto inválido')
        this.id = id,
        this.nome = nome,
        this.preco = preco,
        this.deconto = desconto
    }

    public get precoComDesconto() {
        return this.preco * (1 - this.deconto)
    }
}

const p1 = new Produto(1, "Celular", 2000, 0.7)
console.log(p1)
console.log(p1.precoComDesconto)

export = {}