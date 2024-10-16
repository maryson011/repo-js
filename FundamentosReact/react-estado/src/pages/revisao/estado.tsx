/* eslint-disable */
import Area from "@/components/template/Area";
import { useState } from "react";

export default function Estado(){

    const [texto, setTexto] = useState('')

    return (
        <div className={`p-20`}>
            <Area titulo="Revisão Estado" cor="sky">
                <input type="text" className={`input`}/>
            </Area>
        </div>
    )
}