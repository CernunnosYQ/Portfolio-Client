import Button from "./Button"

type ContactProps = {
    id : string
}

function Contact(props : ContactProps) {
  return (
    <div id={props.id} className="lg:w-[1024px] py-20 mx-auto text-center p-3">
      <h2 className="text-5xl sm:text-7xl font-display">¡Contáctame!</h2>
      <p className="my-8">Estoy en busca de nuevas oportunidades en el mundo del desarrollo 
        web, mi bandeja de entrada siempre está abierta. Ya sea que tengas 
        una pregunta o simplemente quieres saludar, ¡estaré atento para 
        responder!</p>
      <p className="text-2xl font-semibold">Puedes hacerlo por email:</p>
      <Button title="Contactar" href="mailto:yairquintanamx@gmail.com" className="text-xl mt-6"/>
    </div>
  )
}

export default Contact