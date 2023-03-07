import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/Product/ProductCard'
import { modalsContext } from '../context/ModalsContext'
import { useGetProductsByCategoryIdQuery } from '../store/service/product/productService'

const Category = () => {
  const { id } = useParams()
  const { isFilterOpen } = useContext(modalsContext)

  const { data, isError, isLoading, error } =
    useGetProductsByCategoryIdQuery(id)
  const products = data?.data?.products
  const category = data?.data?.category
  console.log(error)

  return (
    <div className='m-4'>
      {data?.data?.products.length === 0
        ? (
          <section>
            <p>No hay productos en esta categoria</p>
          </section>
          )
        : (
          <div className='flex flex-row justify-between my-3'>
            <div className='my-3 font-bold text-2xl'>{category?.name}</div>
            <button
              className='border border-black text-black bg-white hover:bg-black hover:text-white font-bold p-2 h-1/2 w-1/7'
              onClick={isFilterOpen}
            >
              Sort & Filter
            </button>
          </div>
          )}
      {isLoading && !isError
        ? (
          <section>Loading...</section>
          )
        : (
          <>
            <div className='grid sm:grid-cols-1 md:grid-cols-4'>
              {products?.map((product, index) => {
                return (
                  <ProductCard
                    prodName={product.name}
                    price={product.price}
                    key={index}
                  />
                )
              })}
            </div>
          </>
          )}
      {isError && (
        <section>
          <p>Something went wrong. No products found.</p>
        </section>
      )}
    </div>
  )
}

export default Category
