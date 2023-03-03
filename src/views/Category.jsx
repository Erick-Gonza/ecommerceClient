import { useContext } from 'react'
import { ProductCard } from '../components/Product/ProductCard'
import { modalsContext } from '../context/ModalsContext'
import { useGetAllProductsQuery } from '../store/service/product/productService'


const Category = () => {
  const { openCard, openFilter, isCardOpen, isFilterOpen } =
    useContext(modalsContext)

  const{data, isError, isLoading, error} = useGetAllProductsQuery()
  if(isLoading) return<div>Loading...</div>
  else if(isError)return<div>Error</div>
  const products = data.data

  return (
    <div className=" m-4">
      <div className="flex flex-row justify-between my-3">
        <div className="my-3 font-bold text-2xl">Category</div>
        <button
          className="border border-black text-black bg-white hover:bg-black hover:text-white font-bold p-2 h-1/2 w-1/7"
          onClick={isFilterOpen}
        >
          Sort & Filter
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4">
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
    </div>
  )
}

export default Category
