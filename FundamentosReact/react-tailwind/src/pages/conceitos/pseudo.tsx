export default function Pseudo() {
    return (
        <div className={`
            flex justify-center items-center
            h-screen
            text-white
        `}>
            <button className={`
                    p-2 rounded-md
                    bg-green-500 hover:bg-green-700
                    hover:text-yellow-200
                `}>
                Salvar
            </button>
        </div>
    )
}