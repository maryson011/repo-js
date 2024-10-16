enum DiaSemana {
    DOMINGO = 100,
    SEGUNDA,
    TERÇA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}

console.log(DiaSemana.SABADO) // aqui ele infere a posição do enum, mas pode se mapeado manualment DOMINGO = 'domingo' ...

let dia: DiaSemana
dia = DiaSemana.QUINTA
console.log(dia)