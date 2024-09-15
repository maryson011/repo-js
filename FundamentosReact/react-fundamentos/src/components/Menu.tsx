import { Icon360View, IconHome, IconLayoutDashboardFilled, IconLayoutNavbarFilled, IconMoodSmileBeam, IconTournament } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="
            flex flex-col justify-start items-center
            w-52
            text-3xl p-2 gap-2
        ">
            <MenuItem texto="Básico" url="/componente/basico" icone={<IconMoodSmileBeam />}/>
            <MenuItem texto="Título" url="/componente/titulo" icone={<IconLayoutNavbarFilled />}/>
            <MenuItem texto="Página #1" url="/pagina" icone={<IconLayoutDashboardFilled />}/>
            <MenuItem texto="Página #2" url="/funcdamentos/pagina" icone={<IconTournament />}/>
        </div>
    )
}