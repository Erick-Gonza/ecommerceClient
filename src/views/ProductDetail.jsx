import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { CartContext } from '../context/CartContext'
import { useGetProductByIdQuery } from '../store/service/product/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const { data } = useGetProductByIdQuery(id)
  const { addToCart } = useContext(CartContext)
  const product = data?.data

  return (
    <section className='flex py-4 px-2 pb-12 h-full items-center'>
      <div className='container h-auto mx-auto dark:bg-black py-6 bg-gray-variant rounded-md drop-shadow-xl'>
        <div className='flex flex-col lg:flex-row items-center h-full'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img
              className='object-cover aspect-square drop-shadow-lg rounded-md h-64 md:h-96'
              src={`${product?.imageUrl}`} alt={product?.name}
            />
          </div>

          {/* title */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{product?.name}</h2>
            <p className='text-xl text-red-500 font-medium mb-6'>$ {product?.price}</p>
            <p className='mb-8'>{product?.description}</p>
            <button
              onClick={() => {
                addToCart(product, product.id)
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
                  timer: 1200
                })
              }}
              className='bg-primary py-4 px-8 text-white rounded-sm'
            >
              Add to cart
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductDetail
