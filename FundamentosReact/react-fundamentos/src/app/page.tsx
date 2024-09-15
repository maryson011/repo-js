import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina titulo="Fundamentos React" subtitulo="Bem vindo ao mundo do React">
      <div className={`
          flex flex-col justify-center items-center
          h-full w-full text-zinc-400
        `}>
        <IconBrandReact size={200} stroke={1} className="animate-spin-slow"/>
        <span className="flex text-center text-xl font-black text-zinc-400">Curso fundamentos de React</span>
        <span className="flex text-center text-sm text-zinc-500">Aqui você vai aprende fundamentos solidos da biblioteca React</span>
      </div>
    </Pagina>
  );
}
