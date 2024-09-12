import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar uma saudação baseada na horaa tual', () => {
    const s = saudacao()
    expect(s).toBe('boa tarde') // se for executado atarde
})

test('Deve multiplicar dois numeros', () => {
    const v = multiplicar(2, 2)
    expect(v).toBe(4)
})

test('Deve multiplicar perigosamente dois numeros', () => {
    const v = multiplicarPerigosa(2, 2)
    expect(v).toBe(4)
})