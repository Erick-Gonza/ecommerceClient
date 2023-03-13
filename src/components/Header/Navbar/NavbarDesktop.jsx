import { Link, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaRegMoon
} from 'react-icons/fa'
import { FiLogOut, FiLogIn } from 'react-icons/fi'
import { BsFillSunFill } from 'react-icons/bs'
import Swal from 'sweetalert2'

const NavBarDesktop = ({
  handleTheme,
  theme,
  isCardOpen,
  isAuthenticated,
  clearToken,
  user,
  id,
  role
}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearToken()
    navigate('/')
    Swal.fire({
      target: 'main',
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
      timer: 2000
    })
  }

  return (
    <nav className='flex w-full justify-between items-center h-auto px-3 py-4 bg-primary dark:bg-dark-primary'>
      <Link to='/' className='flex flex-col justify-start text-slate-100'>
        <img src='./logo.svg' className='h-16 w-auto object-contain' />
      </Link>

      <section className='flex gap-12 text-slate-100 font-bold'>
        <Link
          className='flex flex-row justify-center items-center gap-1'
          to='/'
        >
          <FaHome className='w-6 h-6' />
          HOME
        </Link>

        <Link
          className='flex flex-row justify-center items-center gap-1'
          to={`/wishlist/${id}`}
        >
          <FaHeart className='w-6 h-6' />
          WISHLIST
        </Link>

        <button
          onClick={isCardOpen}
          className='flex flex-row justify-center items-center gap-1'
          to='/cart'
        >
          <FaShoppingCart className='w-6 h-6' />
          CART
        </button>

        {!isAuthenticated && (
          <Link
            className='flex flex-row justify-center items-center gap-1'
            to='/login'
          >
            <FiLogIn className='w-6 h-6' strokeWidth={3} />
            LOG IN
          </Link>
        )}
        {isAuthenticated && (
          <button
            className='flex flex-row justify-center items-center gap-1'
            onClick={handleLogout}
          >
            <FiLogOut className='w-6 h-6' strokeWidth={3} />
            LOG OUT
          </button>
        )}
      </section>

      {isAuthenticated && (
        <section className='flex text text-slate-100 font-bold'>
          <button
            onClick={handleTheme}
            className='flex flex-row justify-center items-center gap-1 text-white'
          >
            {theme === 'dark'
              ? (
                <BsFillSunFill className='w-6 h-6' />
                )
              : (
                <FaRegMoon className='w-6 h-6' />
                )}
            {theme.toUpperCase()}
          </button>
          <Link
            to={`/profile/${id}`}
            className='flex justify-center items-center  gap-2 px-4 py-3 rounded-md bg-darkcyan uppercase'
          >
            <FaUserCircle className='w-6 h-6' />
            Profile
          </Link>
          {
            role === 'admin' && (
              <Link
                to='/admin/product'
                className='flex justify-center items-center  gap-2 px-4 py-3 rounded-md bg-darkcyan uppercase'
              >
                <FaUserCircle className='w-6 h-6' />
                Admin Panel
              </Link>)
          }

        </section>
      )}

      {!isAuthenticated && (
        <button
          onClick={handleTheme}
          className='flex flex-row justify-center items-center gap-1 text-slate-100 font-bold'
        >
          {theme === 'dark'
            ? (
              <BsFillSunFill className='w-6 h-6' />
              )
            : (
              <FaRegMoon className='w-6 h-6' />
              )}
          {theme.toUpperCase()}
        </button>
      )}
    </nav>
  )
}

export default NavBarDesktop
