import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/Product/ProductCard'
import { AuthContext } from '../context/AuthContext'
import { useGetAllProductsQuery, useGetProductsByCategoryIdQuery } from '../store/service/product/productService'

const Category = () => {
  const { id } = useParams()
  const { id: userId } = useContext(AuthContext)
  const [helper, setHelper] = useState(null)
  useEffect(() => {
    userId === undefined ? setHelper(null) : setHelper(userId)
  }, [userId])
  const { changeCurrent } = useContext(AuthContext)
  const { data, isError, isLoading, refetch } = useGetAllProductsQuery(helper)
  const { data: categoryData } = useGetProductsByCategoryIdQuery(id)
  const category = categoryData?.data?.category
  const productsData = data?.results
  const products = productsData?.filter(product => product?.CategoryId === category?.id)
  useEffect(() => {
    const current = 'category'
    changeCurrent(current)
  }, [])

  return (
    <section>
      <div className='py-8 px-6'>
        <div className='container mx-auto'>
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
