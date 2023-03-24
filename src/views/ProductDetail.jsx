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
      <div className='container h-auto mx-auto dark:bg-black py-6 bg-white rounded-md shadow-xl'>
        <div className='flex flex-col lg:flex-row items-center h-full'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img
              className='object-cover aspect-square shadow-xl rounded-md h-64 md:h-96'
              src={`${product?.imageUrl}`} alt={product?.name}
            />
          </div>

          {/* title */}
          <div className='flex-1 text-center'>
            <h2 className='w-full text-[26px] mb-8 lg:mx-0 uppercase font-bold'>{product?.name}</h2>
            <p className='w-full text-xl text-primary mb-8 font-bold'>$ {product?.price}</p>
            <p className='w-full text-xl mb-8 uppercase font-bold'>{product?.description}</p>
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
              className='bg-gray-variant hover:bg-primary py-4 px-8 text-white rounded-md shadow-md hover:scale-105'
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
