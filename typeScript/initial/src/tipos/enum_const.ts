const VendaStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada'
} as const
// VendaStatus.INICIADA = '123' // não pode ser mais modificado por causa do 'as const'
console.log(VendaStatus.INICIADA)

const Erros = {
    NOME_COMPLETO: 'nome_completo',
    EMAIL_INVALIDO: 'email_invalido',
} as const

let erro: string
erro = Erros.EMAIL_INVALIDO
erro = 'cpf_invalido'

console.log(erro)