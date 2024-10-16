export default function Page() {
    const nome = 'João'
    const idade = 30
    return (
        <div className="flex flex-col">
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{2+2}</div>
            <div>{idade * 3}</div>
            <div>{Math.random()}</div>
        </div>
    )
}