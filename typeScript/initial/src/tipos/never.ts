function falhar(msg: string): never {
    if (msg.length > 10) {
        throw new Error(msg)
    } else {
        throw 'menor'
    }
}

falhar('Oiiiiiiiiiii')