/* eslint-disable */
interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    console.log(props)
    return (
        <div className={`
            flex flex-col justify-center px-5
            border-b border-zinc-700 text-zinc-700
            ${props.className ?? ''}
        `}>
            <h1 className="text-2xl font-black">{props.titulo}</h1>
            <h2 className="text-sm text-zinc-300">{props.subtitulo}</h2>
        </div>
    )
}