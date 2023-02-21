import SocialBar from './SocialBar'

function Footer() {
  return (
    <div className='xl:w-[1280px] m-auto'>
      <hr className="w-full mb-4 border-2 rounded border-neutral-400" />
      <div className='flex flex-col sm:flex-row text-center justify-between mb-4 sm:mb-0'>
        <SocialBar />
        <p className='text-2xl font-display my-auto'>
          <span className="text-slate-600">Creado por</span> <span className="text-3xl">Yair Quintana</span></p>
      </div>
    </div>
  )
}

export default Footer