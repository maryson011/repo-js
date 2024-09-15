import '../app/globals.css'
import Pagina from '@/components/Pagina'

export default function TestePagina() {
    function executar() {
        console.log('O botão com acionado!')
    }
    return (
        <Pagina titulo="Minha página #1" subtitulo="estou na pasta pages" >
            <button className={`bg-blue-500 p-2 rounded-md`} onClick={executar}>
                Teste
            </button>
        </Pagina>
        //{/* <Rodape textoEsqueda="texto da esquerda" textoDireita={`desenvolvido em ${ano}`}/> */}
    )
}