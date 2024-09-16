import { Icon360View, IconArrowsUpDown, IconBraces, IconBrandJavascript, IconCalculatorFilled, IconCode, IconFunction, IconH1, IconHome, IconLayoutDashboardFilled, IconLayoutNavbarFilled, IconMoodSmileBeam, IconTournament } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="
            flex flex-col justify-start
            w-52
            text-3xl p-2 gap-2
            overflow-y-scroll [&::-webkit-scrollbar]:hidden
        ">
            <span className="flex items-center gap-2 text-sm text-zinc-500 pl-3 pt-4">Estado <IconArrowsUpDown size={10} className="text-white"/></span>
            <div className="
                flex flex-col justify-start
                h-70
                overflow-y-scroll [&::-webkit-scrollbar]:hidden
            ">
                <MenuItem texto="Desafio Calculadora" url="/estado/desafioCalculadora" icone={<IconCalculatorFilled />}/>
                <MenuItem texto="Campo de Texto" url="/estado/campoTexto" icone={<IconCode />}/>
                <MenuItem texto="Desafio contator" url="/estado/contador" icone={<IconCode />}/>
                <MenuItem texto="Componente sem Estado" url="/estado/sem" icone={<IconCode />}/>
                <MenuItem texto="Componente com Estado" url="/estado/com" icone={<IconCode />}/>
            </div>

            <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
            <MenuItem texto="JSX xom JS" url="/funcdamentos/soma" icone={<IconBraces />}/>
            <MenuItem texto="JSX: Chamando Funções" url="/funcdamentos/funcoes" icone={<IconFunction />}/>
            <MenuItem texto="Página #1" url="/pagina" icone={<IconLayoutDashboardFilled />}/>
            <MenuItem texto="Página #2" url="/funcdamentos/pagina" icone={<IconTournament />}/>

            <span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
            <MenuItem texto="Básico" url="/componente/basico" icone={<IconMoodSmileBeam />}/>
            <MenuItem texto="Título" url="/componente/titulo" icone={<IconLayoutNavbarFilled />}/>
            <MenuItem texto="JS com JSX" url="/componente/trecho" icone={<IconBrandJavascript />}/>
        </div>
    )
}