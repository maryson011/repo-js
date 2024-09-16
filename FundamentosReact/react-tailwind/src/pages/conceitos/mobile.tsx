export default function Mobile() {
    // "xs" sm md lg xl 2xl
    return (
        <div className={`
            flex justify-center items-center
            md:text-4xl lg:text-5xl
            w-[90%] 2xl:w-[60%]
            text-6xl h-48
            bg-red-500
        `}>
            <span className={`
                    inline sm:hidden
                `}>Mobile</span>
            <span className={`
                    hidden sm:inline
                `}>Não Mobile</span>
        </div>
    )
}