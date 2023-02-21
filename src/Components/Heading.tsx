type HeadingProps = {
  title: string,
  id: string
}

function Heading(props: HeadingProps) {
  return (
    <div id={props.id} className="flex xl:w-[1280px] mx-auto my-8 font-display" >
      <h2 className="mx-4 text-4xl">{props.title}</h2>
      <hr className="w-full mx-8 mt-[1.5em] h-0 border-2 border-neutral-400" />
    </div>
  )
}

export default Heading