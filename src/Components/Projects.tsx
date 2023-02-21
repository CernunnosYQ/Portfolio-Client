import Heading from "./Heading"
import Project from "./Project"

import { ProjectsData } from "../Data"

type ProjectsProps = {
  id: string
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

export default Projects