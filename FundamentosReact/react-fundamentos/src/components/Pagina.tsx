/* eslint-disable */
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    return (
        <div className={`
            flex gap-2
            p-2 h-screen
        `}>
            <Menu />
            <div className={`flex flex-col gap-2 flex-1`}>
                <Cabecalho 
                    titulo={props.titulo}
                    subtitulo={props.subtitulo}
                    className="h-32 bg-gradient-to-r from-blue-700 to bg-zinc-500"
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