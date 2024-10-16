import Caixa from "@/components/Caixa";

export default function Boxsizing() {
    return (
        <div className={`flex flex-col gap-5`}>
            <Caixa className={`w-36`}>#1</Caixa>
            <Caixa className={`w-36 h-36 border-8 border-green-600 box-content`}>#2</Caixa>
        </div>
    )
}