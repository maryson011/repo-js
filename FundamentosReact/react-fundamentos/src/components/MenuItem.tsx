import Link from "next/link";

/* eslint-disable */
export default function MenuItem(props: any) {
    return (
        <Link href={props.url} className="
            px-2 py-2
            bg-zinc-900 text-xl w-full rounded-md 
        ">
            {props.texto}
        </Link>
    )
}