import Caixa from "@/components/Caixa";

export default function Flex() {
    return (
        <div className={`flex flex-col-reverse h-screen gap-5 justify-center items-center`}>
            <Caixa className={`w-2/5`}>#1</Caixa>
            <Caixa className={`w-2/5`}>#2</Caixa>
            <Caixa className={`w-2/5`}>#3</Caixa>
            <Caixa className={`w-2/5`}>#4</Caixa>
            <Caixa className={`w-2/5`}>#5</Caixa>
        </div>
    )
}