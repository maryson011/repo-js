// funcção pura
function soma(a,b){
    return a+b
}
// função impura
let resultado
function soma2(a,b){
    resultado = a+b // efeito colateral
}

soma2(1,3)
soma2(9,3)