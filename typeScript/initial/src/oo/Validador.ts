export default class Validador{
    static maiorQueZero(n: number, msgError: string) {
        if (n <= 0) throw new Error(msgError)
    }

    static entre(n: number, min: number, max: number, msgError: string) {
        if (n < min || n > max) throw new Error(msgError)
    }

    static menor(n: number, min: number, msgError: string) {
        if (n <= min) throw new Error(msgError)
    }
}