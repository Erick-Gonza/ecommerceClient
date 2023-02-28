import { useContext } from 'react'
import { isMobile } from 'react-device-detect'
import { themeContext } from '../../context/ThemeContext'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'
import { FaRegMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'

const Header = () => {
  const { handleClick, theme } = useContext(themeContext)
  return (
    <>
      <header className="relative">
        {!isMobile ? <NavbarDesktop /> : <NavbarMobile />}
      </header>
      <button
        onClick={handleClick}
        className={
          isMobile
            ? 'fixed bottom-5 right-5 z-10 bg-primary rounded-full ring-black ring-2 p-2'
            : 'fixed top-7 right-32 z-10 bg-primary rounded-full ring-black ring-2 p-2'
        }
      >
        {theme === 'dark' ? (
          <BsFillSunFill className="w-6 h-6 text-yellow-300" />
        ) : (
          <FaRegMoon className="w-6 h-6 text-gray-800" />
        )}
      </button>
    </>
  )
}

export default Header
