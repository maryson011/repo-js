interface Entidade {
    id: string
}

interface Vendavel {
    preco: number
    desconto: number
}

interface Produto extends EntidadeComData, Vendavel {

}

interface EntidadeComData extends Entidade {
    criadoEm: Date
    atualizadoEm: Date
    excluidoEm?: Date
}

interface Usuario extends EntidadeComData {
    nome: string
    email: string
    senha?: string
}


const u1: Usuario = {
    id: '2e323',
    nome: 'João',
    email: 'j@email.com',
    criadoEm: new Date(),
    atualizadoEm: new Date()
}

console.log(u1)

const p1: Produto = {
    id: '3de4433',
    preco: 1000,
    desconto: 0.2,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    excluidoEm: new Date()
}

console.log(p1)

export {}