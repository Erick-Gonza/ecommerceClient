import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
// import context
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, price, imageUrl, amount } = item
  // use context
  const { removeFromCart, decreaseAmount, increaseAmount } = useContext(CartContext)

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <div>
            <img className='aspect-square rounded-md max-w-[85px]' src={imageUrl} alt={title} />
          </div>
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <button
              className='text-2xl cursor-pointer' onClick={() => {
                removeFromCart(id)
                Swal.fire({
                  target: 'main',
                  position: 'center',
                  width: '30rem',
                  heightAuto: false,
                  icon: 'success',
                  iconColor: '#efefef',
                  backdrop: true,
                  background: '#DE76B5',
                  color: '#fefefe',
                  title: 'Product removed successfully',
                  showConfirmButton: false,
                  timer: 1250
                })
              }}
            >
              <FiTrash2 className='text-gray-500 hover:text-red-500 transition' />
            </button>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            {/* quantity */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={() => decreaseAmount(id)}>
                {/* minus icon */}
                <IoMdRemove />
              </div>
              <div className='h-full flex justify-center items-center px-2'>
                {/* amount */}
                <p>{amount}</p>
              </div>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={() => increaseAmount(id)}>
                {/* plus icon */}
                <IoMdAdd />
              </div>
            </div>
            {/* price */}
            <h2 className='flex-1 flex items-center justify-around dark:text-white-variant font-semibold'>$ {price}</h2>
            {/* total */}
            <h2 className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
