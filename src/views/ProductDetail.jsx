import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../store/service/product/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isError, isLoading, error } = useGetProductByIdQuery(id)
  const product = data?.data
  console.log({ isError, isLoading, error })

  return (
    <section className='flex flex-col justify-center items-center w-full h-full px-3 py-4'>
      <section className='flex flex-col justify-center items-center px-3 py-2 bg-white-variant 
      dark:bg-black dark:text-white-variant shadow-md rounded-xl lg:w-1/2 lg:flex-row h-full md:h-1/3'>
        <img
          src={product?.image}
          alt={product?.name}
          className='rounded-md object-cover w-full h-full border border-gray-700'
        />
        <section className='flex flex-col w-full mt-2 lg:ml-2'>
          <h1 className='text-xl font-bold text-white '>{product?.name}</h1>
          <p className=' text-lg font-semibold text-white'>
            {product?.description}
          </p>
          <p className='text-lg font-semibold text-black dark:text-white-variant'>
            Category:{product?.Category?.name}
          </p>
          <p className='text-lg font-semibold text-black dark:text-white-variant'>
            Price: {product?.price}
          </p>
          <button className='px-3 py-1 dark:bg-primary dark:text-black-variant bg-black-variant rounded-md text-white font-semibold mt-2'>
            Add to cart
          </button>
        </section>
      </section>
    </section>
  )
}

export default ProductDetail
