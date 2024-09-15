import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className="
            flex flex-col justify-start items-center
            rounded-lg w-52
            bg-zinc-700 text-3xl p-2 gap-2
        ">
            <MenuItem texto="Página #1" url="/pagina"/>
            <MenuItem texto="Página #2" url="/funcdamentos/pagina"/>
        </div>
    )
}