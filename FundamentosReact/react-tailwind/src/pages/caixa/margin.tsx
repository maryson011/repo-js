import Caixa from "@/components/Caixa";

export default function Margin() {
    return (
        <div className={`flex-center h-screen gap-5`}>
            <Caixa className={`mx-3`}>#1</Caixa>
            <Caixa className={`my-5`}>#2</Caixa>
            <Caixa className={`mb-20 ml-12`}>#3</Caixa>
            <Caixa className={`m-32`}>#4</Caixa>
            <Caixa className={`mt-[400px]`}>#5</Caixa>
        </div>
    )
}