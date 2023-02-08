import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="flex w-full justify-around py-4 px-3">
      <section className="w-full">
        <h2>Logo</h2>
      </section>

      <section className="relative border border-gray-200 rounded-md">
        <div className="absolute top-5 left-3">
          <img
            src="https://img.icons8.com/ios/256/search.png"
            alt="search"
            className="object-contain h-4 w-4"
          />
        </div>
        <input
          type="text"
          className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
          placeholder="Search anything..."
        />
        <div className="absolute top-2 right-2">
          <button className="h-10 w-20 rounded-lg bg-gray-200">Search</button>
        </div>
      </section>

      <section className="flex justify-center items-center gap-8 w-full">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/favorites">Fav</Link>
        <Link to="/cart">Cart</Link>
        <button>
          {/* add icon for theme */}
          <img
            src="https://img.icons8.com/ios-glyphs/256/bright-moon.png"
            alt="dark mode"
            className="object-contain h-6 w-6"
          />
        </button>
      </section>
    </nav>
  )
}
