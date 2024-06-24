import type { Dispatch, ReactNode, SetStateAction } from "react"

export default function ConfirmRedirect({ page, linkPage, setRedirect, svg, vBox }: { page: string, linkPage: string, setRedirect: Dispatch<SetStateAction<boolean>>, svg: string, vBox: string }) {
    const logo = svg

    const handleClick = () => {
        setRedirect(false)
    }
    return (
        <section className="w-full h-1/2 fixed left-0 top-[50%] -translate-y-[50%] bg-gradient-to-b backdrop-brightness-0 rounded-lg flex flex-col justify-around items-center p-4 z-[100]">
            <svg viewBox={vBox} fill="currentColor" width="40" height="40" focusable="false">
                <path d={svg}></path>
            </svg>
            <h2 className="text-3xl font-bold drop-shadow-lg">¡Atención!</h2>
            <p className="text-md font-semibold text-pretty text-center drop-shadow-md">Estás a punto de dirigirte a {page}</p>
            <span>¿Deseas continuar?</span>
            <div className="w-full flex justify-around items-center">
                <a href={linkPage} target="_blank" className="w-1/3 py-1 text-center font-bold backdrop-blur-xl hover:bg-white hover:text-[#193a59] border-2 border-gray-300 hover:border-[#193a59] hover:drop-shadow-lg rounded-lg">Si</a>
                <button onClick={handleClick} className="w-1/3 py-1 text-center font-bold backdrop-blur-xl hover:bg-white hover:text-[#193a59] border-2 border-gray-300 hover:border-[#193a59] hover:drop-shadow-lg rounded-lg">No</button>
            </div>
        </section>
    )
}