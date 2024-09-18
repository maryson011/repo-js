/* eslint-disable */
interface AreaProps {
    titulo: string
    sumario?: string
    children: any
    cor: string
}

export default function Area(props: AreaProps){
    return (
        <div className={`
            flex flex-col items-center
            rounded-md w-full
            bg-${props.cor}-500
        `}>
            <div className={`
                    flex w-full items-center ${props.sumario ? 'justify-between' : 'justify-center'} h-14 text-2xl font-black opacity-70
                    bg-black bg-opacity-20
                `}>
                <span className={`px-4`}>{props.titulo}</span>
                {props.sumario && (
                    <span className={`
                            flex items-center px-4
                            bg-black bg-opacity-20 h-full
                        `}>{props.sumario}</span>
                )}
            </div>
            <div className={`p-7`}>
                {props.children}
            </div>
        </div>
    )
}