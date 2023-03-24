import { Link } from 'react-router-dom'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsPlus, BsEyeFill, BsXLg } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useCreateWishlistMutation, useDeleteWishlistItemMutation } from '../../store/service/wishlist/wishlistService'
import { AuthContext } from '../../context/AuthContext'
export const ProductCard = ({ product, refetch }) => {
  const { id: userId,changeCurrent, currentView  } = useContext(AuthContext)
  const { addToCart } = useContext(CartContext)
  const { id: productId, name, description, price, stock, imageUrl, color, category, isFavorite } = product
  const [isFav, setIsFav] = useState(false)
  const [createWishlist] = useCreateWishlistMutation()
  const [deleteFromWishlist] = useDeleteWishlistItemMutation()
  const newWishlistItem = {
    productId,
    userId
  }
  useEffect(() => {
    const current = "home"
    changeCurrent(current)
    if(isFavorite === 1 ){
      setIsFav(true)
    }else if(isFavorite === 0){
      setIsFav(false)
    }
  }, [isFavorite])
 
  const handleDeleteFavoriteClick = () =>{
    deleteFromWishlist({productId, userId})
  }

  const handleFavoriteClick = () => {
    if(isFav === false){
      createWishlist(newWishlistItem)
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
        title: 'Se ha agregado a Favoritos',
        showConfirmButton: false,
        timer: 1200
      })
    }else if(isFav === true){
      deleteFromWishlist({productId, userId})
    }
    setTimeout(()=>{
      refetch()
    },250)
  }

  return (
    <div>
      {/* image */}
      <section className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>

          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              // src={`http://localhost:5173/api/v1/product/public/${imageUrl}`}
              src={`${imageUrl}`}
              className='max-h-[160px] group-hover:scale-110 transition duration-200'
            />
          </div>
        </div>
        <div className='absolute top-2 -right-10 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer'>
          {currentView === "wishlist" 
          ?  <div className='bg-white-variant p-1 drop-shadow-xl
          flex justify-center items-center text-white w-12 h-12'
          >
                <HiHeart
                  color='#DE76B5'
                  className='w-8 h-8'
                  onClick={handleDeleteFavoriteClick}
                />
          </div>
          : <div className='bg-white-variant p-1 drop-shadow-xl
          flex justify-center items-center text-white w-12 h-12'
          >
            {!isFav
              ? (
                <HiOutlineHeart
                  color='#DE76B5'
                  className='w-8 h-8 z-10'
                  onClick={handleFavoriteClick}
                />
                )
              : (
                <HiHeart
                  color='#DE76B5'
                  className='w-8 h-8 z-10'
                  onClick={handleFavoriteClick}
                />
                )}
          </div> }
          <button onClick={() =>{
            addToCart(product, productId),
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
                title: 'Product has been added to Cart',
                showConfirmButton: false,
                timer: 800
              })
          }
          }>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${productId}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </section>
      {/* data */}
      <section className='space-y-2'>
        <h2 className='text-sm capitalize text-gray-500'>{category}</h2>
        <Link to={`/product/${productId}`}>
          <h2 className='font-semibold'>{name}</h2>
        </Link>
        <h2 className='font-semibold'>$ {price}</h2>
      </section>
    </div>
  )
}
