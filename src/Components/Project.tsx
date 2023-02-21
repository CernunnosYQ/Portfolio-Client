import Button from "./Button"
import { skill_icons } from "../Data"

type ProjectProps = {
  title: string,
  img_src: string,
  description: string,
  blogpost: string,
  skills: string[],
  demo: string,
  github: string,
}

function Project(props: ProjectProps): JSX.Element {
  const skills = props.skills.map((skill, i) => <span key={i}>{skill_icons[skill]}</span>)

  return (
    <div className="flex flex-col sm:flex-row w-full h-full mt-10 bg-slate-800 rounded-xl 
                    overflow-hidden border-2 border-sky-900">
      <img src={props.img_src} alt="" className="object-fit w-full sm:h-full sm:w-1/3 sm:mr-2 md:mr-8" />
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

  export default Project