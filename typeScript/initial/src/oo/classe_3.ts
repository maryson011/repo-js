// Produto (id, nome (2 - 250), preco (> 0), desc (0 - 0.8), precoFinal)
// deve ter dados consistentes

class Produto {
    private id: number
    private nome: string
    private preco: number
    private deconto: number

    constructor(id: number, nome: string, preco: number, desconto: number) {
        if (id <= 0) throw new Error('Id inválido')
        if (nome.length < 2 || nome.length > 250) throw new Error('Nome inválido')
        if (preco < 0) throw new Error('Preço inváldo')
        if (desconto < 0 || desconto > 0.8) throw new Error('Desconto inválido')
        this.id = id,
        this.nome = nome,
        this.preco = preco,
        this.deconto = desconto
    }

    public get precoComDesconto() {
        return this.preco * (1 - this.deconto)
    }
}

const p1 = new Produto(1, "Celular", 2000, 0.8)
console.log(p1)
console.log(p1.precoComDesconto)

export = {}