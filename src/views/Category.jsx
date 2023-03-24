import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/Product/ProductCard'
import { AuthContext } from '../context/AuthContext'
import { modalsContext } from '../context/ModalsContext'
import { useGetAllProductsQuery, useGetProductsByCategoryIdQuery } from '../store/service/product/productService'

const Category = () => {
  const { id } = useParams()
  const { id : userId } = useContext(AuthContext)
  const { isFilterOpen } = useContext(modalsContext)
  const [helper, setHelper] = useState(null)
  useEffect(() => {
    userId === undefined ? setHelper(null) : setHelper(userId)
  }, [userId])
  const {changeCurrent, currentView} = useContext(AuthContext)
  const { data, isError, isLoading, error, refetch } = useGetAllProductsQuery(helper)
  const { data : categoryData } = useGetProductsByCategoryIdQuery(id)
  // const products = data?.data?.products
  const category = categoryData?.data?.category
  const productsData = data?.results
  const products = productsData?.filter(product => product?.CategoryId === category?.id)
  useEffect(() => {
    const current = "category"
    changeCurrent(current)
  }, [])

  return (
    <section>
      <div className='py-8 px-6'>
        <div className='container mx-auto'>
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
                  className='dark:text-white-variant dark:hover:bg-primary dark:bg-black-variant border border-black text-black bg-white hover:bg-black hover:text-white font-bold p-2 h-1/2 w-1/7 rounded-md'
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0'>
                  {products?.map((product, index) => {
                    return (
                      <ProductCard product={product} key={product?.id} refetch={refetch} />
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

      </div>

    </section>
  )
}

export default Category
