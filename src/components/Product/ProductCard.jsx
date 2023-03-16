import { Link } from 'react-router-dom'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsPlus, BsEyeFill } from 'react-icons/bs'

export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  const { id, name, description, price, stock, imageUrl, color, category } = product

  return (
    <div>
      {/* image */}
      <section className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>

          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src='https://picsum.photos/1920/800' className='max-h-[160px] group-hover:scale-110 transition duration-200' />
          </div>
        </div>
        <div className='absolute top-2 -right-10 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </section>
      {/* data */}
      <section className='space-y-2'>
        <h2 className='text-sm capitalize text-gray-500'>       {category}</h2>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold'>{name}</h2>
        </Link>
        <h2 className='font-semibold'>$ {price}</h2>
      </section>
    </div>
  )
}
