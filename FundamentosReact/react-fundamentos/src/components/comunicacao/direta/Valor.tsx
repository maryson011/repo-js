interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps) {
    return (
        <div className="bg-yellow-600 p-4 text-8xl font-black">
            {props.texto}
        </div>
    )
}