type Usuario = {nome: string, email: string}

let usuario: Usuario = {
    nome: 'João Pedro',
    email: 'l@email.com'
}

// usuario.senha = '123'
console.log(usuario.nome)
console.log(usuario.email)

usuario = {
    nome: 'Jaque',
    email: 'j@email.con'
}

console.log(usuario.nome)
console.log(usuario.email)
