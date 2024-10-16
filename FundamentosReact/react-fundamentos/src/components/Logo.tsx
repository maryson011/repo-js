import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2.5 px-5 text-3xl font-black bg-blue-700 min-h-16 border-b border-zinc-700">
            <span><IconBrandReact size={30} stroke={1}/></span>
            <span>React</span>
        </Link>
    )
}