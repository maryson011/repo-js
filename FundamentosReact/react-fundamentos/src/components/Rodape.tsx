/* eslint-disable */
interface RodapeProps {
    textoEsqueda: string
    textoDireita: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div className="
                flex justify-between items-center
                h-12 rounded-xl p-2
                bg-cyan-600
            "
        >
            <span>{props.textoEsqueda}</span>
            <span>{props.textoDireita}</span>
            
        </div>
    )
}