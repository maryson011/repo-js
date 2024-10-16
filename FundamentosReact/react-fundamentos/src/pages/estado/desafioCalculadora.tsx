import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function DesafioCalculadora() {
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function alteraValor1(e: any) {
        setValor1(e.target.value)
    }

    function alteraValor2(e: any) {
        setValor2(e.target.value)
    }
    return (
        <Pagina titulo="Desafio Calculadora" subtitulo="Capítulo Estado">
            <div className="flex flex-col gap-1">
                <div className="flex gap-1 w-60">
                    <input
                        type="number"
                        className="campo" 
                        value={valor1}
                        onChange={alteraValor1}
                    />
                    <input
                        type="number"
                        className="campo" 
                        value={valor2}
                        onChange={alteraValor2}
                    />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <span className="flex justify-center">{valor1} + {valor2} = {+valor1 + +valor2}</span>
                    <span className="flex justify-center">{valor1} - {valor2} = {valor1 - valor2}</span>
                    <span className="flex justify-center">{valor1} * {valor2} = {valor1 * valor2}</span>
                    <span className="flex justify-center">{valor1} / {valor2} = {(valor1 > 0 && valor2 > 0) ? (valor1 / valor2).toFixed(2) : 0}</span>
                </div>
            </div>
        </Pagina>
    )
}