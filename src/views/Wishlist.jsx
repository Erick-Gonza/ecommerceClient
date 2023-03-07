import { ProductCard } from '../components/Product/ProductCard'

import React from 'react'

export const Wishlist = () => {
  const categ = {
    id: 1,
    name: 'Bags'
  }
  const products = [
    {
      id: 1,
      name: 'Mochila',
      description: 'Lorem impsum',
      price: 23.99,
      imageUrl: ''
    },
    {
      id: 2,
      name: 'Bolso1',
      description: 'Lorem impsum',
      price: 40.5,
      imageUrl: ''
    },
    {
      id: 3,
      name: 'Mochila grande',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: ''
    },
    {
      id: 4,
      name: 'Mochilita',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: ''
    },
    {
      id: 5,
      name: 'Crossbody',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: ''
    }
  ]

  return (
    <div className='m-4'>
      <div className='flex flex-row justify-center my-3'>
        <div className='my-3 font-bold text-2xl'>{categ.name}</div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5'>
        {products.map((product, index) => {
          return <ProductCard prodname={product.name} price={product.price} key={index} />
        })}
      </div>
    </div>
  )
}
