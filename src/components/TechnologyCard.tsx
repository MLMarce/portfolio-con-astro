export default function TechnologyCard({technology}: {technology: string}) {
    return(
        <b className="w-max text-sm px-1 border-slate-800/55 backdrop-blur-md text-gray-200 rounded-lg">{technology}</b>
    )
}