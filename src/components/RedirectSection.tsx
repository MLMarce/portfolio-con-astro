import { useState } from "react"
import ConfirmRedirect from "./ConfirmRedirect"

export default function RedirectSection({ page, linkPage }: { page: string, linkPage: string }) {
    const [redirect, setRedirect] = useState(false)

    const handleClick = () => {
        setRedirect(!redirect)
    }

    return (
        <div>
            {redirect && <ConfirmRedirect page={page} linkPage={linkPage} setRedirect={setRedirect}/>}
            <button
                onClick={handleClick}
                className="z-50 absolute bottom-24 left-6 px-2 font-semibold border rounded-md hover:bg-white hover:text-black"
            >{page}</button>
        </div>
    )
}