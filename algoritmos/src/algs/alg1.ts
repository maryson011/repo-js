const buscaBinariaPrimeiroUltimo = (lista: number[], numero: number): number[] => {

    const encontraPrimeiro = () => {
        let resultado = -1
        let esquerda = 0, direita = lista.length -1
        while (esquerda <= direita) {
            const meio = Math.floor((esquerda + direita) / 2)
            if (lista[meio] === numero) {
                resultado = meio
                direita = meio -1
            } else if (lista[meio] < numero) {
                esquerda = meio + 1
            } else {
                direita = meio - 1
            }
        }
        return resultado
    }

    const encontraUltimo = () => {
        let resultado = -1
        let esquerda = 0, direita = lista.length -1
        while(esquerda <= direita) {
            const meio = Math.floor((esquerda + direita) / 2)
            if (lista[meio] === numero) {
                resultado = meio
                esquerda = meio + 1
            } else if (lista[meio] < numero) {
                esquerda = meio + 1
            } else {
                direita = meio -1
            }
        }
        return resultado
    }

    const primeiro = encontraPrimeiro()
    const ultimo = encontraUltimo()

    return primeiro === -1 ? [-1, -1] : [primeiro, ultimo]
}

const lista = [
    4, 4, 5, 6, 7, 8, 8, 9, 10, 10, 10, 10, 11, 11, 12, 12, 13, 14, 15, 16, 16, 16, 18, 19, 20,
    20, 21, 22, 23, 24, 25, 25, 26, 27, 28, 29, 30, 30, 30, 31, 32, 33, 34, 34, 35, 36, 37, 38, 38,
    39, 40, 41, 42, 42, 43, 44, 45, 46, 47, 48, 48, 49, 50
  ];

console.log(buscaBinariaPrimeiroUltimo(lista, 42))