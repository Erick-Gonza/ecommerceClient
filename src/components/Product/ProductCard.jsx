import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Filter/Button'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import Swal from 'sweetalert2'
import { useCreateWishlistMutation } from '../../store/service/wishlist/wishlistService'

export const ProductCard = ({ name, price, productId }) => {
  const [isFav, setIsFav] = useState(false)
  const [createWishlist] = useCreateWishlistMutation()

  const newWishlistItem = {
    productId,
    userId: 1
  }

  const handleFavoriteClick = () => {
    createWishlist(newWishlistItem).then((res) => {
      console.log(res)
    })

    setIsFav(!isFav)
    if (!isFav) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha agregado a favoritos',
        showConfirmButton: false,
        timer: 1500,
        target: 'main'
      })
    }
  }

  return (
    <div className='flex px-2 gap-4 justify-center'>
      <section className=''>
        <section className='m:w-52 md:w-62 lg:w-72 sm:h-64 md:h-64 lg:h-72  mb-8 relative overflow-hidden group drop-shadow-xl rounded-lg '>
          <Link to={'/product/' + productId}>
            <img
              src='https://picsum.photos/1920/800'
              alt='Banner'
              className='object-cover w-full h-full'
            />
          </Link>
          <div className='bg-white-variant p-1 rounded-full drop-shadow-xl absolute top-2 right-2 animate-pulse'>
            {!isFav
              ? (
                <HiOutlineHeart
                  color='#DE76B5'
                  className='w-8 h-8'
                  onClick={handleFavoriteClick}
                />
                )
              : (
                <HiHeart
                  color='#DE76B5'
                  className='w-8 h-8'
                  onClick={handleFavoriteClick}
                />
                )}
          </div>
          <div className='dark:bg-black bg-primary sm:inline-flex md:absolute w-full sm:h16 md:h-20 bottom-0 opacity-100 md:opacity-0 group-hover:opacity-100 flex flex-cols justify-between px-3 transition-all duration-500 '>
            <div className='dark: text-white-variant sm:text-black md:text-white py-2'>
              <p>{name}</p>
              <p className='font-semibold'>{'$' + price}</p>
            </div>
            <div className='py-2 grid grid-rows-2'>
              <button className='md:hover:bg-black-variant dark:hover:bg-primary dark:text-black-variant dark:bg-gray-variant bg-white-variant hover:text-white rounded px-2 border drop-shadow-lg font-semibold'>
                Buy now
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
