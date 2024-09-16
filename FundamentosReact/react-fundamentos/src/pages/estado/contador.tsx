import { useState } from "react";
import "../../app/globals.css";
import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function DesafioContador() {
  const [valor, setValor] = useState(0);
  const [delta, setDelta] = useState(1)

  function adicionarValor() {
    setValor(valor + delta);
  }

  function retirarValor() {
    setValor(valor - delta);
  }
  function adicionarDelta() {
    setDelta(delta + 1);
  }

  function retirarDelta() {
    setDelta(delta - 1);
  }
  return (
    <Pagina titulo="Desafio contador" subtitulo="cápitulo estado">
      <div className="flex flex-col gap-2">
        <div>
          <span>Contador: </span>
          <span>{valor}</span>
        </div>
        <div className="flex gap-3">
          <button onClick={retirarValor} className="bg-blue-500 p-3 rounded-full">
            <IconMinus />
          </button>
          <button onClick={adicionarValor} className="bg-blue-500 p-3 rounded-full">
            <IconPlus />
          </button>
        </div>
        <div className="flex gap-3">
        <button onClick={retirarDelta} className="bg-purple-500 p-3 rounded-full">
            <IconMinus />
          </button>
          <button onClick={adicionarDelta} className="bg-purple-500 p-3 rounded-full">
            <IconPlus />
          </button>
          <span>{delta}</span>
        </div>
      </div>
    </Pagina>
  );
}

// IconPlus
// IconMinus
