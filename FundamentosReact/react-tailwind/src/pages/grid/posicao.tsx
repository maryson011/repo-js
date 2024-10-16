import Caixa from "@/components/Caixa";

export default function Posicao() {
    return (
        <div className="
            m-7 grid gap-2 
            grid-cols-3
            h-72
            bg-zinc-500
        ">
            <Caixa className="row-start-1 row-end-4">#1</Caixa>
            <Caixa className="row-start-1 row-end-3 col-start-2 col-span-2">#2</Caixa>
            <Caixa className="">#3</Caixa>
            <Caixa className="">#4</Caixa>
            <Caixa className="col-start-1 col-end-4">#5</Caixa>
            <Caixa className="">#6</Caixa>
            <Caixa className="">#7</Caixa>
            <Caixa className="">#8</Caixa>
            <Caixa className="">#9</Caixa>
            <Caixa className="">#10</Caixa>
            <Caixa className="">#11</Caixa>
            <Caixa className="">#12</Caixa>
        </div>
    )
}