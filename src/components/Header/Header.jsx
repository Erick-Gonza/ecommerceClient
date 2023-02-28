import { Link } from 'react-router-dom'
import { Nav } from './Navbar/Nav.jsx'

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full h-auto">
      <Nav />
      <section className="flex w-full justify-around px-3 py-2 space-x-2 text-xs border-solid border-x-2 border-y-2 border-gray-500 md:text-xl">
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          NEW
        </Link>
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          WEAR
        </Link>
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          ACCESORIES
        </Link>
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          BAGS
        </Link>
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          TOYS
        </Link>
        <Link to="/" className="font-semibold cursor-pointer hover:scale-105">
          SHOES
        </Link>
        <Link
          to="/"
          className="font-bold text-red-400 cursor-pointer hover:scale-105"
        >
          SALES
        </Link>
      </section>
    </header>
  )
}

export default Header
