import InputFormatado from "@/components/formulario/InputFormatado";
import BotaoMemorizado from "@/components/template/BotaoMemorizado";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useCallback, useState } from "react";

export default function(){
    const [quantidade, setQuantidade] = useState(0)

    const finalizar = useCallback(function finalizar(e: any){
        e.preventDefault()
        window.alert("Compra finalizafa")
        setQuantidade(0)
    }, [])
    return (
        <Pagina titulo="Memorizando funções" subtitulo="entendendo o hook useCallback">
            <Display texto="Quantos produtos você quer" />
            <form>
                <Flex col center>
                    <InputFormatado valor={quantidade} tipo="number" 
                        onInput={(e)=>setQuantidade(+e.target.value)}></InputFormatado>
                    <BotaoMemorizado texto="Confirmar" onClick={finalizar}></BotaoMemorizado>
                </Flex>
            </form>
        </Pagina>
    )
}