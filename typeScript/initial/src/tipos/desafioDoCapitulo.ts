// type ContaCorrente (numero, saldo, movimentar)
// type Cliente (nome, email, contas[])

// const clientes: Cliente[] = [ ... ]

// movimentarConta(numConta: number, valor: number)

type ContaCorrente = {
    numero: number
    saldo: number
    movimentar: (valor: number) => void
}

type Cliente = {
    nome: string
    email: string
    contas: ContaCorrente[]
}

function movimentar(this: ContaCorrente, valor: number) {
    this.saldo += valor
}

const clientes: Cliente[] = [
    { nome: 'Maria', email: 'm@email', contas: [
            { numero: 123, saldo: 0, movimentar },
            { numero: 124, saldo: 0, movimentar },
        ]
    },
    { nome: 'José', email: 'j@email', contas: [
            { numero: 133, saldo: 0, movimentar },
            { numero: 134, saldo: 0, movimentar },
        ]
    },
]

function movimentarConta(numConta: number, valor: number) {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    }).filter(c => c)[0]
    conta?.movimentar(valor)
}

function buscarSaldo(numConta: number): number | null {
    const conta = clientes.map(cli => {
        return cli.contas.find(cc => cc.numero === numConta)
    })[0]?.saldo ?? null
    return conta
}

movimentarConta(123, 3)
movimentarConta(123, 10)
movimentarConta(123, 100)
console.log(buscarSaldo(123))