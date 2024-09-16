// Mantine.dev
interface GridProps {
    cols?: number
    semEspaco: boolean
    children: any
}
export default function Grid(props: GridProps) {
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1}
            ${props.semEspaco ? '' : 'gap-3'}
        `}>
            {props.children}
        </div>
    )
}