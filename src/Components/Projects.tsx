import Button from "./Button"
import Heading from "./Heading"

import { ProjectsData, skill_icons } from "../Data"

type ProjectsProps = {
  id: string
}

type ProjectProps = {
  title: string,
  img_src: string,
  description: string,
  blogpost: string,
  skills: string[],
  demo: string,
  github: string,
}

function Projects(props: ProjectsProps): JSX.Element {
  const project_list = ProjectsData.map((project) => 
    <Project
      title={project.title}
      img_src={project.image}
      description={project.description}
      blogpost={project.blogpost}
      skills={project.skills}
      demo={project.demo}
      github={project.repo} />
  )

  return (
    <section className="xl:w-[1280px] mx-auto pt-8 ">
      <Heading id={props.id} title="Proyectos" />
      <div className="lg:w-[1024px] mx-auto">
        {project_list}
      </div>
    </section>
  )
}

function Project(props: ProjectProps): JSX.Element {
  const skills = props.skills.map((skill) => skill_icons[skill])

  return (
    <div className="flex w-full h-full mt-10 bg-slate-800 rounded-xl overflow-hidden \
        border-2 border-sky-900">
      <img src={props.img_src} alt="" className="w-1/3 mr-8" />
      <div className="flex flex-col justify-evenly p-8">
        <h3 className="text-3xl font-display"><a href={props.blogpost}>{props.title}</a></h3>
        <p>{props.description} <a href={props.blogpost} className="text-sky-600">Leer más.</a></p>
        <div>
          <p className="text-xl mb-4 font-semibold">Skills:</p>
          <div className="flex gap-4 text-2xl">
            {skills}
          </div>
        </div>
        <div className="pt-4">
          <Button title="Demo" className="mr-4" href={props.demo} />
          <Button title="GH Repo" href={props.github} />
        </div>
      </div>
    </div>
  )
}

export default Projects