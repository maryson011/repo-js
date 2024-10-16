/* eslint-disable */
interface RodapeProps {
    textoEsqueda: string
    textoDireita: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className="
                flex justify-between items-center
                h-12 text-base px-10 bg-sinc-900
                border-t border-zinc-700 text-zinc-500
            "
        >
            <span>{props.textoEsqueda}</span>
            <span>{props.textoDireita}</span>
            
        </div>
    )
}