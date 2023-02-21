import { MouseEventHandler } from "react"

type ButtonProps = {
    title: string,
    href?: string,
    onClick?: MouseEventHandler,
    className?: string,
}

function Button(props : ButtonProps) : JSX.Element {
  if (props.href) {
    return (
      <a href={props.href} className={ props.className + 
        " inline-block bg-sky-800 rounded-md px-4 py-1 transition hover:scale-105"}>
          {props.title}
      </a>
    )
  }
  return (
    <button onClick={props.onClick} className={ props.className + 
      " inline-block border-2 border-cyan-300 rounded-md px-4 py-1 transition hover:scale-105"}>
        {props.title}
    </button>
  )
}

export default Button