import Caixa from "@/components/Caixa";

export default function Redimensionamento() {
    return (
        <div className={`flex gap-5`}>
            <Caixa className={`w-14 shrink-0`}>#1</Caixa>
            <Caixa className={`w-32 grow`}>#2</Caixa>
            <Caixa className={`w-64 shrink`}>#3</Caixa>
        </div>
    )
}