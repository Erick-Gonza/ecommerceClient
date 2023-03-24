import { Link } from 'react-router-dom'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube
} from 'react-icons/fa'
import { useContext } from 'react'
import { modalsContext } from '../../context/ModalsContext'
import logo from '../../assets/img/logo.png'

const Footer = () => {
  const { menuBlur } = useContext(modalsContext)
  return (
    <footer className={`w-full flex flex-col ${menuBlur && 'blur-md'}`}>
      <Link className='flex justify-center py-2 dark:bg-gray-700 bg-primary' to='/'>
        <img src={logo} className='h-16' />
      </Link>

      <section className='w-full flex flex-col items-center justify-center bg-black px-2 py-3 font-bold gap-2'>
        <section className='w-full flex flex-row items-center justify-center md:flex-row py-1 md:py-2 text-white gap-4 md:gap-6'>
          <Link
            className='cursor-pointer p-1 hover:rounded-full opacity-80 hover:opacity-100 hover:bg-primary hover:scale-110 dark:hover:bg-black-variant'
            to='https://twitter.com/PinkNeonMexico' target='_blank'
          >
            <FaTwitter className='drop-shadow-2xl h-6 md:h-7 w-auto' />
          </Link>
          <Link
            className='cursor-pointer p-1 hover:rounded-full opacity-80 hover:opacity-100 hover:bg-primary hover:scale-110 dark:hover:bg-black-variant '
            to='https://www.instagram.com/PinkNeon2023' target='_blank'
          >
            <FaInstagram className='h-6 md:h-7 w-auto' />
          </Link>
          <Link
            className='cursor-pointer p-1 hover:rounded-full opacity-80 hover:opacity-100 hover:bg-primary hover:scale-110 dark:hover:bg-black-variant'
            to='https://www.facebook.com/PinkNeon2023' target='_blank'
          >
            <FaFacebookSquare className='h-6 md:h-7 w-auto' />
          </Link>
          <Link
            className='cursor-pointer p-1 hover:rounded-full opacity-80 hover:opacity-100 hover:bg-primary hover:scale-110 dark:hover:bg-black-variant'
            to='https://www.youtube.com/@jeannypinkneon/featured' target='_blank'
          >
            <FaYoutube className='h-6 md:h-7 w-auto' />
          </Link>
        </section>

        <section className='w-full flex gap-4 items-center justify-center text-white text-sm lg:text-lg lg:gap-8'>
          <a
            href='#'
            className='text-center py-1 font-bold opacity-80 hover:opacity-100'
          >
            About Us
          </a>
          <a
            href='#'
            className='text-center py-1 font-bold opacity-80 hover:opacity-100'
          >
            Privacy Notice
          </a>
          <a
            href='#'
            className='text-center py-1 font-bold opacity-80 hover:opacity-100'
          >
            Careers
          </a>
          <a
            href='#'
            className='text-center py-1 font-bold opacity-80 hover:opacity-100'
          >
            Help Center
          </a>
        </section>

        <section className='w-full flex items-center justify-center text-white'>
          <h2 className='py-1 font-bold text-sm opacity-80 hover:opacity-100'>
            © 2023 Pink Neon Mexico
          </h2>
        </section>
      </section>
    </footer>
  )
}

export default Footer
