import { Link } from 'react-router-dom'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <section className="flex justify-center py-4 px-3 bg-gray-700" h-auto>
        <img src="./logo.svg" className="h-16 md:h-18" />
      </section>

      <section className="w-full flex flex-col items-center justify-center bg-black py-2 px-3 text-sm font-bold gap-2">
        <section className="w-full flex flex-row justify-center py-2 text-slate-100 fill-white">
          <div className="flex flex-row justify-center md:flex-row list-inside list-none gap-2">
            <Link className="" to="/">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link className="" to="/">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link className="" to="/">
              <FaFacebookSquare className="w-6 h-6" />
            </Link>
            <Link className="" to="/">
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
        </section>

        <section className="w-full flex flex-row items-center justify-center text-slate-100 font-bold lg:text-lg">
          <div className="flex gap-8 text-center">
            <a href className="About us">
              About Us
            </a>
            <a href className="Privacy Notice">
              Privacy Notice
            </a>
            <a href className="Careers">
              Careers
            </a>
            <a href className="Help Center">
              Help Center
            </a>
          </div>
        </section>

        <section className="w-full flex flex-row items-center justify-center text-slate-100 font-bold">
          <h2 className="">© 2023 Pink Neon Mexico</h2>
        </section>
      </section>
    </footer>
  )
}

export default Footer
