class Curso {
    // readonly id: number
    public nome: string | undefined

    constructor(public readonly id: number) { // o id não precisa ser declarado como atributo diretamente
        if (id < 1) throw Error('Id inválido!')
    }

    // get id() {
    //     this._id
    //     return this._id
    // }
}

const c1 = new Curso(2)
c1.nome = 'Iniciando com typescript'
console.log(c1)
console.log(c1.id)

export = {}

// modificadores de acesso