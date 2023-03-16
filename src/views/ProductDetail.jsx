import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useGetProductByIdQuery } from '../store/service/product/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const { data } = useGetProductByIdQuery(id)
  const { addToCart } = useContext(CartContext)
  const product = data?.data

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={`http://localhost:5173/api/v1/product/public/${product?.imageUrl}`} alt={product?.name} />
          </div>

          {/* title */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{product?.name}</h2>
            <p className='text-xl text-red-500 font-medium mb-6'>$ {product?.price}</p>
            <p className='mb-8'>{product?.description}</p>
            <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white rounded-sm'>Add to cart</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductDetail
