import { useState } from 'react';
import '../../app/globals.css'
import Pagina from "@/components/Pagina";

export default function PaginaComEstado() {
    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="capítulo Estado">
            <div className='flex flex-col'>
                <div>
                    <span>Valor: </span>
                    <span>{numero}</span>
                </div>
                <button onClick={incrementar} className='botao'>
                    incrementar
                </button>
            </div>
        </Pagina>
    )
}