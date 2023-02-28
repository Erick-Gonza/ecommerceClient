import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaHome, FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primary">
      <section className="flex flex-col justify-start text-slate-100">
        <img src="./logo.svg" className="h-14 w-auto object-contain" />
      </section>

      <section
        className={`bg-primary ${
          isOpen === true ? 'fixed' : 'hidden'
        } -left-0 lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-center gap-16 transition-all overflow-y-scroll z-50 border-r border-black-variant`}
      >
        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-slate-100"
          to="/"
        >
          <FaHome className="w-6 h-6" />
          HOME
        </Link>

        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-slate-100"
          to="/favorites"
        >
          <FaHeart className="w-6 h-6" />
          FAV
        </Link>

        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-slate-100"
          to="/cart"
        >
          <FaShoppingCart className="w-6 h-6" />
          CART
        </Link>

        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-slate-100"
          to="/signin"
        >
          <FaUserCircle className="w-6 h-6" />
          SIGNIN / SIGNUP
        </Link>
      </section>
      <section>
        <button onClick={handleMenu}>
          {isOpen ? (
            <FiX size={32} color={'#FEFEFE'} />
          ) : (
            <FiMenu size={32} color={'#FEFEFE'} />
          )}
        </button>
      </section>
    </nav>
  )
}

export default NavBarMobile
