import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../store/service/product/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const { data, isError, isLoading, error } = useGetProductByIdQuery(id)
  const product = data?.data

  return (
    <section className="flex flex-col justify-center items-center w-full h-full px-3 py-4">
      <section className="flex flex-col justify-center items-center px-3 py-2 bg-primary shadow-md rounded-md lg:w-1/2 lg:flex-row">
        <img
          src={product?.image}
          alt={product?.name}
          className="rounded-sm object-cover w-full h-80 border border-gray-700"
        />
        <section className="flex flex-col w-full mt-2 lg:ml-2">
          <h1 className="text-xl font-bold text-white">{product?.name}</h1>
          <p className="text-lg font-semibold text-white">
            {product?.description}
          </p>
          <p className="text-lg font-semibold text-white">
            Category:{product?.Category?.name}
          </p>
          <p className="text-lg font-semibold text-white">
            Price: {product?.price}
          </p>
          <button className="px-3 py-1 bg-black rounded-sm text-white font-semibold mt-2">
            Add to cart
          </button>
        </section>
      </section>
    </section>
  )
}

export default ProductDetail
