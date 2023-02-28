import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaRegMoon,
} from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { themeContext } from '../../../context/ThemeContext'

export const Nav = () => {
  const { handleClick, theme } = useContext(themeContext)

  return (
    <section className="w-full bg-primary dark:bg-black">
      <nav className="flex justify-around gap-2 w-full px-4 py-3 text-white">
        <section className="w-full">
          <h2>Logo</h2>
        </section>

        <section className="hidden md:block relative rounded-md mx-3 w-full">
          <div className="absolute top-5 left-1">
            <img
              src="https://img.icons8.com/ios/256/search.png"
              alt="search"
              className="object-contain h-4 w-4"
            />
          </div>
          <input
            type="text"
            className="h-14 md:w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search anything..."
          />
          <div className="absolute top-2 right-6">
            <button className="h-10 w-20 rounded-lg bg-gray-400">Search</button>
          </div>
        </section>

        <section className="hidden md:flex justify-center items-center gap-8 text-sm text-white">
          <Link
            className="flex flex-row justify-center items-center gap-1"
            to="/"
          >
            <FaHome className="w-6 h-6" />
            HOME
          </Link>

          <Link
            className="flex flex-row justify-center items-center gap-1"
            to="/favorites"
          >
            <FaHeart className="w-6 h-6" />
            FAV
          </Link>

          <Link
            className="flex flex-row justify-center items-center gap-1"
            to="/cart"
          >
            <FaShoppingCart className="w-6 h-6" />
            CART
          </Link>

          <Link
            className="flex flex-row justify-center items-center gap-1"
            to="/signin"
          >
            <FaUserCircle className="w-6 h-6" />
            SIGNIN / SIGNUP
          </Link>
          <button onClick={handleClick}>
            {theme === 'dark' ? (
              <BsFillSunFill className="w-6 h-6" />
            ) : (
              <FaRegMoon className="w-6 h-6" />
            )}
          </button>
        </section>
      </nav>
    </section>
  )
}
