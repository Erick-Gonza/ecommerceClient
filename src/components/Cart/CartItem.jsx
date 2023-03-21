import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import icons
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
// import context
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, price, image, amount } = item
  // use context
  const { removeFromCart, decreaseAmount, increaseAmount } = useContext(CartContext)

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <div>
            <img className='max-w-[80px]' src={image} alt={title} />
          </div>
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <button className='text-2xl cursor-pointer' onClick={() => removeFromCart(id)}>
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
