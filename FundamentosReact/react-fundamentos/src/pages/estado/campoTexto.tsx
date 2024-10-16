import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function CampoTexto() {
    const [valor, setValor] = useState('')

    function alterarValor(e: any) {
        setValor(e.target.value)
    }
    return (
        <Pagina titulo="Campo de Texto" subtitulo="Capítulo Estado">
            <div className="flex flex-col">
                <input
                    type="text"
                    className="campo" 
                    value={valor}
                    onChange={alterarValor}
                />
                <span className="font-extralight">{valor}</span>
            </div>
        </Pagina>
    )
}