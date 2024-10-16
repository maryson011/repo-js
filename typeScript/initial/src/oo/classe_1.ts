class Curso {
    private _id: number | undefined
    public nome: string | undefined

    get id() {
        return this._id
    }
    set id(n: number | undefined) {
        if (n ?? 0) {
            this._id = n
        } else {
            console.log('id inválido')
        }
    }
}

const c1 = new Curso()
// c1.id = 124
c1.nome = 'Iniciando com typescript'
c1.id = -1
console.log(c1.id)
console.log(c1)

export = {}

// modificadores de acesso