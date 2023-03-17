import { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import icons
import { IoMdArrowForward } from 'react-icons/io'
// import { FiTrash2 } from 'react-icons/fi'
// import components
import CartItem from '../../components/Cart/CartItem'
// import contexts
import { SidebarContext } from '../../context/SidebarContext'
import { CartContext } from '../../context/CartContext'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  // use both contexts
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)
  const { cart, clearCart, total } = useContext(CartContext)

  return (
    <div className={`${isSidebarOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-200 z-20 px-4 lg:px-[35px] overflow-y-scroll dark:bg-black dark:text-white`}>
      <div className='flex items-center justify-between py-6 border-b'>
        {/* Quantity */}
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        {/* Icon */}
        <div onClick={toggleSidebar} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {
          cart.map((item) => {
            return <CartItem key={item?.id} item={item} />
          })
        }
      </div>
      <div className='flex flex-col gap-y-4 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <h2 className='mr-2 font-bold'><span>Total: </span>$ {parseFloat(total).toFixed(2)}</h2>
          </div>
          {/* clear cart icon */}
          <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={clearCart}>
            <FiTrash2 />
          </div>
        </div>

        <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium rounded-sm dark:bg-black-variant'>
          View Cart
        </Link>

        <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium rounded-sm'>
          Checkout
        </Link>

      </div>
    </div>
  )
}

export default Sidebar
