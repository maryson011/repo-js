interface Flexivel {
    nome: string
    [atributo: string]: any
}

const f1: Flexivel = {
    nome: 'BAS',
    idade: 32,
    salario: 1232,
    acessos: {
        acc1: 'Acesso1',
        acc2: 'Acesso2',
    }
}

console.log(f1)

export = {}