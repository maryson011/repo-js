import { Icon360View, IconBraces, IconBrandJavascript, IconCode, IconFunction, IconH1, IconHome, IconLayoutDashboardFilled, IconLayoutNavbarFilled, IconMoodSmileBeam, IconTournament } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="
            flex flex-col justify-start
            w-52
            text-3xl p-2 gap-2
        ">
            <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
            <MenuItem texto="Componente sem Estado" url="/" icone={<IconCode />}/>

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