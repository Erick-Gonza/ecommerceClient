import { Link } from 'react-router-dom'
import { FaHome, FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const NavBarDesktop = () => {
  return (
    <nav className="flex w-full justify-between items-center h-auto px-3 py-4 bg-primary">
      <section className="flex flex-col justify-start text-slate-100">
        <img src="./logo.svg" className="h-16 w-auto object-contain" />
      </section>

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
      </section>

      <section className="text font-semibold text-slate-100">
        <button className="px-4 py-3 rounded-md font-semibold bg-darkcyan">
          My Profile
        </button>
      </section>
    </nav>
  )
}

export default NavBarDesktop