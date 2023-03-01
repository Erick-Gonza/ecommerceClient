import { useContext } from 'react'
import { Button } from '../components/Filter/Button'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/Product/ProductCard'
import { modalsContext } from '../context/ModalsContext'

const Category = () => {
  const { openCard, openFilter, isCardOpen, isFilterOpen } =
    useContext(modalsContext)

  const categoryDummy = {
    id: 1,
    name: 'Bags',
  }
  const productsDummy = [
    {
      id: 1,
      name: 'Mochila',
      description: 'Lorem impsum',
      price: 23.99,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Bolso1',
      description: 'Lorem impsum',
      price: 40.5,
      imageUrl: '',
    },
    {
      id: 3,
      name: 'Mochila grande',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 4,
      name: 'Mochilita',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'Crossbody',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
  ]

  return (
    <div className=" m-4">
      <div className="flex flex-row justify-between my-3">
        <div className="my-3 font-bold text-2xl">{categoryDummy.name}</div>
        <button
          className="border border-black text-black bg-white hover:bg-black hover:text-white font-bold p-2 h-1/2 w-1/7"
          onClick={isFilterOpen}
        >
          Sort & Filter
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4">
        {productsDummy.map((product, index) => {
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
