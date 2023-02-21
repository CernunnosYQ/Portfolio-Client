import Heading from "./Heading"
import IconReact from "../assets/react.svg"
import IconHTML5 from "../assets/html5.svg"
import IconCSS3 from "../assets/css3.svg"
import IconJS from "../assets/javascript.svg"
import IconTS from "../assets/typescript.svg"
import IconPython from "../assets/python.svg"
import IconPSQL from "../assets/postgresql.svg"
import IconTailwind from "../assets/tailwindcss.svg"

type AboutMeProps = {
  id: string,
}

type SkillProps = {
  icon: string,
  title: string,
}

function AboutMe(props: AboutMeProps) {
  return (
    <section id={props.id} className="xl:w-[1280px] m-auto">
      <Heading title="Habilidades" id={props.id} />
      <div className="flex justify-evenly flex-wrap lg:w-[1024px] m-auto">
        <Skill icon={IconHTML5} title="HTML" />
        <Skill icon={IconCSS3} title="CSS" />
        <Skill icon={IconJS} title="Javascript" />
        <Skill icon={IconTS} title="Typescript" />
        <Skill icon={IconTailwind} title="Tailwind" />
        <Skill icon={IconReact} title="React" />
        <Skill icon={IconPython} title="Python" />
        <Skill icon={IconPSQL} title="Postgres" />
      </div>
    </section>
  )
}

function Skill(props: SkillProps): JSX.Element {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 p-3">
      <div className="bg-slate-800 flex flex-col sm:flex-row sm:gap-2 justify-center items-center rounded-lg border-2 \
        border-sky-800 px-4 py-3 transition cursor-pointer shadow-xl hover:scale-105">
        <img src={props.icon} alt="" className="h-10" />
        <p className="text-2xl sm:text-3xl">{props.title}</p>
      </div>
    </div>
  )
}

export default AboutMe