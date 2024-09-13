interface Usuario {
    id: number
    nome: string
    email: string
    senha?: string
}

interface CasoDeUso {
    executar(entrada: any): any
}

class RegistrarUsuario implements CasoDeUso {
    executar(entrada: Usuario) {
        console.log('Executando registrar usuario')
        console.log(entrada)
    }
    
}
const u1:Usuario = {
    id: 12334,
    nome: 'Msris',
    email: "@email",
    senha: '34e3fe'
}

const casoDeUso: CasoDeUso = new RegistrarUsuario()
casoDeUso.executar(u1)
export {}