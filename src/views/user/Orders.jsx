import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center px-4 py-2 gap-y-2'>
      <section className='w-full md:w-1/3 flex flex-col gap-4 px-3 py-4 bg-white rounded-lg dark:bg-black shadow-lg'>
        <section className='w-full'>
          <h2 className='text-center text-2xl font-bold '>My Orders</h2>
        </section>

        <Link className='w-full p-2 rounded-md shadow-md dark:bg-black-variant border drop-shadow-lg hover:scale-105' to='/order/1'>
          <h2 className='text-center text-xl font-bold'>Order 1</h2>

          <div className='w-full text-center'>
            <h2>Products: Product 1, Product 2</h2>
            <h2>Total products: 3</h2>
            <h2>Total cost: 2,500</h2>
          </div>
        </Link>

        <Link className='w-full p-2 rounded-md shadow-md dark:bg-black dark:bg-black-variant border drop-shadow-lg hover:scale-105' to='/order/2'>
          <h2 className='text-center text-xl font-bold'>Order 2</h2>

          <div className='w-full text-center'>
            <h2>Products: Product 1, Product 2</h2>
            <h2>Total products: 3</h2>
            <h2>Total cost: 2,500</h2>
          </div>
        </Link>

        <Link className='w-full p-2 rounded-md shadow-md dark:bg-black dark:bg-black-variant border drop-shadow-lg hover:scale-105' to='/order/3'>
          <h2 className='text-center text-xl font-bold'>Order 3</h2>

          <div className='w-full text-center'>
            <h2>Products: Product 1, Product 2</h2>
            <h2>Total products: 3</h2>
            <h2>Total cost: 2,500</h2>
          </div>
        </Link>
      </section>
    </section>
  )
}

export default Order
