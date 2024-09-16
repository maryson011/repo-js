import { useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import UsuarioInfo from "./UsuarioInfo"
import { IconMoon, IconSun } from "@tabler/icons-react"

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alternaTema() {
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    const usuario = {
        nome: 'Frankie Sullivan',
        email: 'frankie@email.com',
        imagemUrl: 'https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg'
    }
    return (
        <div className={`flex h-screen relative ${tema}`}>
            <aside className="
                flex flex-col
                bg-zinc-200 dark:bg-zinc-800
                text-black dark:text-white
                 w-72
            ">
                <Logo className="pt-7 px-7"/>
                <Menu className="pt-3.5 px-7 pb-28 flex-1 overflow-auto [&::-webkit-scrollbar]:hidden"/>
                <div className="fixed bottom-0 bg-zinc-200 dark:bg-zinc-800 w-72">
                    <hr className="mx-7 border-zinc-700"/>
                    <UsuarioInfo {...usuario} className="p-7"/>
                </div>
            </aside>
            <div>
                {props.children}
            </div>
                <div className="absolute right-2 top-4">
                    <button className="" onClick={alternaTema}>
                        {tema === 'dark' ? <IconSun /> : <IconMoon />}
                    </button>
                </div>
        </div>
    )
}