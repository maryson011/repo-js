import Caixa from "@/components/Caixa";

export default function Tamanho() {
    return (
        <div className={`flex flex-col gap-5`}>
            <Caixa className={`w-16 h-16`}>w-16 h-16</Caixa>
            <Caixa className={`w-4/5`}>w-4/5</Caixa>
            <Caixa className={`w-1/2`}>w-1/2</Caixa>
            <Caixa className={`w-[60%]`}>w-[60%]</Caixa>
            <Caixa className={`max-w-[25%]`}>max-w-[25%]</Caixa>
        </div>
    )
}