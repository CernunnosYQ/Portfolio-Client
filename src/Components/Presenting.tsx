import SocialBar from "./SocialBar"
import Placeholder from "../assets/profile_640.jpg"

type PresentingProps = {

}

function Presenting(props: PresentingProps) {
  return (
    <section className="sm:w-[640px] m-auto text-center pt-12 pb-2">
      <h1 className="text-5xl font-display font-bold mb-2">Yair Quintana</h1>
      <h2 className="text-2xl font-display font-semibold text-slate-500 mb-6">Desarrollador Full Stack</h2>
      <p className="mb-6">Full Stack Developer con experiencia en ReactJs, Typescript, Python
        y PostgreSQL, me gustan los desafíos, aprender e involucrarme en cada parte del desarrollo.</p>
      <SocialBar />
      <img src={Placeholder} className="w-1/2 m-auto rounded-full mt-8 mb-12" />
    </section>
  )
}

export default Presenting