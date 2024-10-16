export function saudacao(): string {
    const manha = new Date().getHours() < 12
    console.log(manha)
    return manha ? 'bom dia' : 'boa tarde'
}

export function multiplicar(n1: number, n2: number): number {
    return n1 * n2
}

export function multiplicarPerigosa(n1: any, n2: any): number {
    return n1 * n2
}