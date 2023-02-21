import { Link } from "react-scroll";
import Button from "./Button";

type NavbarProps = {
  logo?: string,
  title?: string,
  children: React.ReactNode,
}

type NavLinkProps = {
  title: string,
  href: string,
}

function Navbar(props: NavbarProps): JSX.Element {
  return (
    <nav className="m-auto xl:w-[1280px] flex py-4 px-2">
      {props.logo && <img src={props.logo} alt="" />}
      {props.title && <h1 className="font-['Squada_One'] text-3xl">{props.title}</h1>}
      <ul className="flex justify-start ml-4 text-lg">
        {props.children}</ul>
      <ul className="w-full flex justify-end content-center">
        <li className="p-1 pr-4 font-bold">
          <a href="#" className="text-sky-900">EN</a> |
          <a href="#" className="text-sky-600"> ES</a>
        </li>
        <li className="">
          <Button title="Descarga mi CV" href="#" />
        </li>
        <li className=""></li>
      </ul>
    </nav>
  )
}

export function NavLink(props: NavLinkProps) {
  return (
    <li className="flex content-end px-3 py-1">
      <Link to={props.href} spy={true} smooth={true} duration={500} offset={-20}
        className="border-b-2 border-transparent hover:border-neutral-200 cursor-pointer" >
        {props.title}
      </Link></li>
  )
}

export default Navbar;