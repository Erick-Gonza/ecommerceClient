import { Link } from 'react-router-dom'
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaRegMoon,
} from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'

const NavBarDesktop = ({ handleTheme, theme, isCardOpen }) => {
  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primary">
      <Link to="/" className="flex flex-col justify-start text-slate-100">
        <img src="./logo.svg" className="h-16 w-auto object-contain" />
      </Link>

      <section className="flex gap-12 text-slate-100 font-bold">
        <Link
          className="flex flex-row justify-center items-center gap-1"
          to="/"
        >
          <FaHome className="w-6 h-6" />
          HOME
        </Link>

        <Link
          className="flex flex-row justify-center items-center gap-1"
          to="/wishlist"
        >
          <FaHeart className="w-6 h-6" />
          WISHLIST
        </Link>

        <button
          onClick={isCardOpen}
          className="flex flex-row justify-center items-center gap-1"
          to="/cart"
        >
          <FaShoppingCart className="w-6 h-6" />
          CART
        </button>

        <Link
          className="flex flex-row justify-center items-center gap-1"
          to="/login"
        >
          <FaUserCircle className="w-6 h-6" />
          LOG IN
        </Link>

        <button
          onClick={handleTheme}
          className={`flex flex-row justify-center items-center gap-1 text-white`}
        >
          {theme === 'dark' ? (
            <BsFillSunFill className="w-6 h-6" />
          ) : (
            <FaRegMoon className="w-6 h-6" />
          )}
          {theme.toUpperCase()}
        </button>
      </section>

      <section className="text font-semibold text-slate-100">
        <Link
          to="/profile"
          className="px-4 py-3 rounded-md font-semibold bg-darkcyan"
        >
          My Profile
        </Link>
      </section>
    </nav>
  )
}

export default NavBarDesktop
