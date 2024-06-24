import { useState } from "react"
import ConfirmRedirect from "./ConfirmRedirect"

export default function RedirectSection({ page, linkPage, pathLogo, vBox }: { page: string, linkPage: string, pathLogo: string, vBox: string}) {
    const [redirect, setRedirect] = useState(false)

    const handleClick = () => {
        setRedirect(!redirect)
    }


    return (
        <div>
            {redirect && <ConfirmRedirect page={page} linkPage={linkPage} setRedirect={setRedirect} svg={pathLogo} vBox={vBox}/>}
            <button
                onClick={handleClick}
                className=" px-2 w-full font-semibold border rounded-md hover:bg-white hover:text-black"
            >{page}</button>
        </div>
    )
}