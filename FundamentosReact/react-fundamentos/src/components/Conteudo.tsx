/* eslint-disable */
interface ConteudoProps {
    children: any
}
export default function Conteudo(props: ConteudoProps) {
    console.log(props)
    return (
        <div className="
            flex justify-center items-center flex-1
            bg-emerald-500 text-3xl rounded-md
        ">
            {props.children}
        </div>
    )
}