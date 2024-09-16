interface TituloProps {
    principal: string
    secundario: string
    gradiente?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-start p-2">
            <span className={`
                    text-5xl font-bold font-mono
                    ${props.gradiente ? 'bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent' : ''}
                `}>{props.principal}</span>
            <span className="text-xs font-thin font-serif text-zinc-400">{props.secundario}</span>
        </div>
    )
}