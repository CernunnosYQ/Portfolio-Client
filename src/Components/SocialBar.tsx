import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function SocialBar(): JSX.Element {
  return (
    <div className='flex justify-center'>
      <a href="https://" target="_blank" className='m-4 text-4xl transition duration-300 \
        hover:scale-125 hover:text-sky-300'>
        <FaGithub /></a>
      <a href="https://" target="_blank" className='m-4 text-4xl transition duration-300 \
        hover:scale-125 hover:text-sky-300'>
        <FaLinkedin /></a>
      <a href="https://" target="_blank" className='m-4 text-4xl transition duration-300 \
        hover:scale-125 hover:text-sky-300'>
        <FaTwitter /></a>
    </div>
  )
}

export default SocialBar