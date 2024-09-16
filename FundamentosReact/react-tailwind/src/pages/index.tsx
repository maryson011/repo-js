import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/titulo";

export default function Home() {
  return (
    <Pagina>
      <Titulo
        principal="Home"
        secundario="Curso de react com tailwind css"
        gradiente
      />
    </Pagina>
  );
}
