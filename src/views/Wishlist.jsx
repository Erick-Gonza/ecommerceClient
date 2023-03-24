import { ProductCard } from '../components/Product/ProductCard'
import { useParams } from 'react-router-dom'
import { useGetWishlistQuery } from '../store/service/wishlist/wishlistService'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Wishlist = () => {
  const { userId } = useParams()
  const { changeCurrent } = useContext(AuthContext)
  const { data, isError, isLoading } = useGetWishlistQuery(userId)
  const products = data?.data

  useEffect(() => {
    const current = 'wishlist'
    changeCurrent(current)
  }, [])

  return (
    <div className='m-4'>
      {products?.length === 0
        ? (
          <section>
            <p>Sign in to add products to wishlist</p>
          </section>
          )
        : (
          <div className='flex flex-row justify-between my-3'>
            <div className='my-3 font-bold text-2xl'>My wishlist</div>

          </div>
          )}
      {isLoading && !isError
        ? (
          <section>Loading...</section>
          )
        : (
          <>
            <div className='grid sm:grid-cols-1 md:grid-cols-4'>
              {products?.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product.id}
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
export default Wishlist
