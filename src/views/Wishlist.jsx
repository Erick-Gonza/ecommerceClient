import { ProductCard } from '../components/Product/ProductCard'
import { useParams } from 'react-router-dom'
import { useGetWishlistQuery } from '../store/service/wishlist/wishlistService'

const Wishlist = () => {
  const { userId } = useParams()
  const { data, isError, isLoading, error } = useGetWishlistQuery(userId)
  const products = data?.data.Products
  return (
    <div className='m-4'>
      {products === null
        ? (
          <section>
     <p>No hay productos en esta categoria</p>
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
            {products.map((product, index) => {
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
export default Wishlist
