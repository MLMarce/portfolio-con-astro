import { useEffect, useState } from 'react'
import * as data from '../data.json'
import TechnologyCard from './TechnologyCard'
import ProjectCard from './ProjectCard';

export interface IProject {
    title: string;
    description: string;
    image: string;
    date: string;
    deploy: string;
    repository: string;
    technologies: string[];
}

export default function ProjectsList() {
    const { projects } = data
    const [fullProject, setFullProject] = useState<IProject | null>(null)
    const [observer, setObserver] = useState(false)

    const handleClick = (project: IProject) => {
        setFullProject(prev => prev = { ...project })
        setObserver(prev => prev = !prev)
        console.log('click en info')
    }

    useEffect(() => {

    }, [fullProject, observer])
    return (
        <section className='w-full h-full relative flex flex-col gap-1 justify-around'>

            {
                fullProject !== null ? <ProjectCard date={fullProject.date} description={fullProject.description} title={fullProject.title} technologies={fullProject.technologies} setFullProject={setFullProject} /> : projects?.map(project => (
                    <article key={project.title} className='w-full relative h-full  flex flex-col bg-gradient-to-b from-black via-black/50 to-transparent justify-around border-2 border-slate-900/75 rounded-lg p-2 z-30'>
                        <header className='w-full flex flex-col md:flex-row justify-between'>
                            <h2>{project.title}</h2>
                            <p key={project.title}  className='text-sm'>{project.date}</p>
                        </header>
                        <footer className='w-full hidden md:flex flex-wrap gap-1 p-1'>
                            {project?.technologies.map(technology => (
                                <TechnologyCard technology={technology} />
                            ))}
                        </footer>
                        <button type='button' onClick={() => handleClick(project)} className='absolute z-40 right-3 bottom-3 text-xs font-bold px-2 rounded-lg backdrop-blur-xl hover:bg-white hover:text-black'>INFO</button>
                    </article>
                ))
            }
        </section>
    )
} 