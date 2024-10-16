/* eslint-disable */
import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
            flex
            h-screen
        `}>
            <AreaLateral />
            <div className={`flex flex-col flex-1`}>
                <Cabecalho 
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-16 bg-gradient-to-r from-blue-700 to bg-zinc-500"
                />
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Rodape 
                    textoEsqueda="texto da esquerda" 
                    textoDireita={`desenvolvido em ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    )
}