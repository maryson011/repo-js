abstract class Animal {
    abstract emitirSom(): string
}

class Gato extends Animal {
    emitirSom(): string {
        return 'miauuuuu'
    }
}

class Cachorro extends Animal {
    emitirSom(): string {
        return 'uauauaua'
    }
}

function exibir(animal: Animal) {
    console.log(animal.emitirSom())
}

let a: Animal = new Gato()
exibir(a)
a = new Cachorro()
exibir(a)

export {}