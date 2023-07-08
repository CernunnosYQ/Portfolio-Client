import { useState } from "react"
import Button from "./Button"

import { FaBars, FaTimes } from 'react-icons/fa'

type NavbarOOCProps = {
  logo?: string,
  title?: string,
  children: React.ReactNode,
}

function NavbarOutOfCanvas(props: NavbarOOCProps) {
  const [isHidden, toggleNav] = useState(true)

  return (
    <div className=" md:hidden">
    <div className="w-full flex justify-between p-4">
      <header>
        {props.logo && <img src={props.logo} alt="" className="h-8 mr-2" />}
        {props.title && <h1 className="font-['Squada_One'] text-3xl">{props.title}</h1>}
      </header>
      <button className="p-2 text-xl border border-sky-800 rounded-md"
        onClick={() => toggleNav(!isHidden)}>
        <FaBars />
      </button>
    </div>
    <div className={(isHidden ? "hidden" : "") + " fixed z-20 bg-slate-800 h-screen w-screen sm:w-2/3 top-0 sm:right-0 \
      transition-all duration-500"}>
      <nav className="m-4 mr-6">
        <div>
          <button 
            className="p-2 text-xl border border-sky-800 rounded-md"
            onClick={() => toggleNav(!isHidden)}>
            <FaTimes />
          </button>
        </div>
        <header className="flex mb-4 justify-center">
          {props.logo && <img src={props.logo} alt="" className="h-8 mr-2" />}
          {props.title && <h1 className="font-['Squada_One'] text-3xl">{props.title}</h1>}
        </header>
        <hr className="border-slate-700 border w-full" />
        <ul className="flex flex-col items-center my-4 gap-2">
          {props.children}
          <hr className="border-slate-700 border w-full" />
        <li className="w-2/3 text-center mt-4">
          <Button title="Descarga mi CV" href="#" className="w-full" /></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default NavbarOutOfCanvas