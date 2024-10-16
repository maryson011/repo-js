function a() {
    let v = 10
    setTimeout(()=>{
        console.log(`valor de v era ${v}`)
        v=100
        console.log(`valor de v agora é ${v}`)
    }, 2000)
    return v
    v = 30
}

console.log(a())