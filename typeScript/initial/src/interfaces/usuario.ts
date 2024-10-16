interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}

const usuarioLogado: Usuario = {
    id: 143,
    nome: 'Juca',
    email: 'ju@email.com',
    senha: '234@dsF$'
}

const usuarioParcial: Partial<Usuario> = {
    id: 2112,
    email: 'null@email'
}

const usuarioCompleto: Required<Usuario> = {
    id: 2112,
    nome: 'null',
    email: 'null@email',
    senha: 'nuls@#@'
}

const usuarioLeitura: Readonly<Usuario> = {
    id: 2112,
    nome: 'leituta',
    email: 'null@email',
    senha: 'nuls@#@'
}

console.log(usuarioLogado)
console.log(usuarioLogado.email)
console.log(usuarioParcial)
console.log(usuarioParcial.nome)
console.log(usuarioCompleto)
console.log(usuarioLeitura)

// Utility types


export = {}