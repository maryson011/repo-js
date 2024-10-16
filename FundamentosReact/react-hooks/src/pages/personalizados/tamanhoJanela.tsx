import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamenhoJanela from "@/data/hooks/useTamanhoJanela";

export default function(){
    const tamanho = useTamenhoJanela()
    return (
        <Pagina titulo="Qual é o tamanho da página" subtitulo="usando um hook personalizado para descon=brir o tanho da página">
            <Display texto={tamanho}/>
            <div className={`
                w-40 h-40
                sm:bg-blue-400
                md:bg-pink-400
                lg:bg-green-400
                xl:bg-purple-400
                2xl:bg-orange-400
                `}></div>
        </Pagina>
    )
}