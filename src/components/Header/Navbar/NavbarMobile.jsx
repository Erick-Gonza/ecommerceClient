import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaRegMoon,
} from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { FiLogOut, FiLogIn } from 'react-icons/fi'
import Swal from 'sweetalert2'

export const NavBarMobile = ({
  handleTheme,
  theme,
  isCardOpen,
  isSetMenuBlur,
  isAuthenticated,
  clearToken,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
    isSetMenuBlur()
  }

  const handleMenuCart = () => {
    handleMenu()
    isCardOpen()
  }

  const handleMenuTheme = () => {
    handleMenu()
    handleTheme()
  }

  const handleLogout = () => {
    clearToken()

    handleMenu()
    Swal.fire({
      target: 'header',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#fefefe',
      backdrop: true,
      background: '#DE76B5',
      color: '#fefefe',
      title: 'User has been logged out',
      showConfirmButton: false,
      timer: 2000,
    })

    let timer = setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primary">
      <section className="flex flex-col justify-start text-slate-100">
        <img src="./logo.svg" className="h-14 w-auto object-contain" />
      </section>

      <section
        className={`bg-[#C66BA1] ${
          isOpen === true ? 'fixed' : 'hidden'
        } -left-0 lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-center gap-16 overflow-y-scroll z-50 border-r border-black-variant `}
      >
        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white"
          to="/"
          onClick={handleMenu}
        >
          <FaHome className="w-6 h-6" />
          <p className="text-white font-bold drop-shadow-md">HOME</p>
        </Link>

        <Link
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold"
          to="/wishlist"
          onClick={handleMenu}
        >
          <FaHeart className="w-6 h-6" />
          <p className="text-white font-bold drop-shadow-md">WISHLIST</p>
        </Link>

        <button
          onClick={handleMenuCart}
          className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold"
          to="/cart"
        >
          <FaShoppingCart className="w-6 h-6" />
          <p className="text-white font-bold drop-shadow-md">CART</p>
        </button>

        {!isAuthenticated ? (
          <Link
            className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold"
            to="/login"
            onClick={handleMenu}
          >
            <FiLogIn className="w-6 h-6" strokeWidth={3} />
            LOG IN
          </Link>
        ) : (
          <button
            className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold"
            onClick={handleLogout}
          >
            <FiLogOut className="w-6 h-6" strokeWidth={3} />
            LOG OUT
          </button>
        )}

        <button
          onClick={handleMenuTheme}
          className={`flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold uppercase`}
        >
          {theme === 'dark' ? (
            <BsFillSunFill className="w-6 h-6" />
          ) : (
            <FaRegMoon className="w-6 h-6" />
          )}
          {theme.toUpperCase()}
        </button>

        {isAuthenticated && (
          <Link
            to="/profile"
            className="flex flex-row justify-center items-center gap-1 px-2 py-1 text-white font-bold uppercase"
          >
            <FaUserCircle className="w-6 h-6" />
            Profile
          </Link>
        )}
      </section>

      <button onClick={handleMenu}>
        {isOpen ? (
          <FiX size={32} color={'#FEFEFE'} strokeWidth={3} />
        ) : (
          <FiMenu size={32} color={'#FEFEFE'} strokeWidth={2} />
        )}
      </button>
    </nav>
  )
}

export default NavBarMobile
