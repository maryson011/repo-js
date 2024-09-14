export default function Page() {
    // const trecho = <h1>Trecho #1</h1>
    const trechos = [
        <div key="1">Trecho #1</div>,
        <div key="2">Trecho #2</div>,
        <div key="3">Trecho #3</div>,
    ]

    const teste = {
        jsx: <h1>teste jsx</h1>
    }
    return (
        <div>
            {trechos[2]}
            {teste.jsx}
        </div>
    )
}