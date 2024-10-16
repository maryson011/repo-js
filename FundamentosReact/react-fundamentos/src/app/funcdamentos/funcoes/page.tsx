export default function Pages() {
    function renderizarTitulo() {
        return (
            <div>
                <h1>Título</h1>
                <h2>Subtítulo</h2>
            </div>
        )
    }

    function renderizarConteudo() {
        return (
            <ul>
                <li>Ana</li>
                <li>Carlos</li>
                <li>Zinco</li>
            </ul>
        )
    }

    return (
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}