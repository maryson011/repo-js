/* eslint-disable */
import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icone: any
    texto: string
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className={`
            flex flex-col items-center gap-2
        `}>
            <div className={`
                    rounded-full p-5
                    bg-gradient-to-r from-blue-500 to-green-500
                `}>
                {React.cloneElement(props.icone, {
                    size: 70,
                    stroke: 1,
                    className: 'opacity-50'
                })}
            </div>
            <span className={`opacity-50 font-black text-2xl`}>{props.texto}</span>
        </Link>
    )
}