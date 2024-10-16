import Link from "next/link"
import React from "react"

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url}>
            <div className="
                flex items-center gap-2 
                py-1 px-3 rounded-md
                text-zinc-700 hover:bg-white
                dark:text-zinc-300 dark:hover:bg-black
            ">
                <span>{React.cloneElement(props.icone, {
                    stroke: 1
                })}</span>
                <span className="text-sm">{props.texto}</span>
            </div>
        </Link>
    )
}