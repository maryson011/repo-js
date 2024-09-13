abstract class Celular {
    ligar() {
        console.log('em ligação')
    }

    abstract acessarRedeMovel(): void
}

class Iphone23Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('acessando rede movel')
    }
}
class Iphone22Pro extends Celular {
    acessarRedeMovel(): void {
        console.log('acessando rede movel')
    }
}

// let c1 = new Celular()
// c1.ligar()
let c1 = new Iphone22Pro()
c1.ligar()
c1.acessarRedeMovel()
c1 = new Iphone23Pro()
c1.ligar()
c1.acessarRedeMovel()

export {}