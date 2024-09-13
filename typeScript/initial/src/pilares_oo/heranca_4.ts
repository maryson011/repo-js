class Carro {
    private _velocidade: number = 0

    constructor(readonly velocidadeMaxima: number = 200) {}

    get velocidade() {
        return this._velocidade
    }

    acelerar() {
        this.alterarVelocidade(5)
    }

    public frear(){
        this.alterarVelocidade(-5)
    }

    protected alterarVelocidade(delta: number) {
        const novaVelocidade = this._velocidade + delta
        if (novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima) {
            this._velocidade = novaVelocidade
        } else if (novaVelocidade > this.velocidadeMaxima) {
            this._velocidade = this.velocidadeMaxima
        } else {
            this._velocidade = 0
        }
    }
}

class Fusca extends Carro {
    constructor() {
        super(165)
    }
}

let c1: Carro = new Fusca()
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.frear()
console.log(c1.velocidade)
console.log(c1.velocidadeMaxima)

class Ferrare extends Carro {
    constructor() {
        super(300)
    }

    public acelerar(): void {
        this.alterarVelocidade(10)
    }
    public frear(): void {
        this.alterarVelocidade(-12)
    }
}

c1 = new Ferrare()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.acelerar()
console.log(c1.velocidade)
c1.frear()
c1.frear()
c1.frear()
console.log(c1.velocidade)

export {}