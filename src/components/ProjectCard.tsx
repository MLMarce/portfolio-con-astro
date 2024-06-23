
import TechnologyCard from "./TechnologyCard";
import type { IProject } from "./Projects";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  setFullProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}
export default function ProjectCard({ title, description, technologies, date, setFullProject }: Props) {
  return (
    <article className="absolute z-[100] w-full min-h-full h-max p-4 flex flex-col justify-between items-center bg-gradient-to-b rounded-lg top-0 right-0 left-0 bottom-0">
      <span
        onClick={() => setFullProject(null)}
        className="text-4xl cursor-pointer w-12 h-12 text-center flex justify-center items-center absolute -top-10 right-4 p-2 bg-white text-black rounded-full"
      >X</span>
      <header className="w-full px-2 flex flex-col justify-between">
        <h2 className="text-md">{title}</h2>
        <p className="text-sm">{date}</p>
      </header>
      <p className="text-[16px] font-normal">{description}</p>
      <footer className="w-full gap-1 flex flex-wrap">
        {
          technologies?.map((technology: string) => (
            <TechnologyCard technology={technology} />
          ))
        }
      </footer>
    </article>
  )
}

