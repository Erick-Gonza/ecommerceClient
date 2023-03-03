import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 py-2 gap-y-4">
      <section className="w-full">
        <h2 className="text-center text-2xl font-bold">Orders</h2>
      </section>

      <section className="w-full md:w-1/2 flex flex-col gap-10 md:gap-20 px-3 py-4 bg-white rounded-sm">
        <Link className="w-full p-2 rounded-md shadow-md" to="/order/1">
          <h2 className="text-center text-xl font-bold">Order 1</h2>

          <div className="w-full text-center">
            <h2>Products: {'Product 1, Product 2'}</h2>
            <h2>Total products: {'3'}</h2>
            <h2>Total cost: {'2,500'}</h2>
          </div>
        </Link>

        <Link className="w-full p-2 rounded-md shadow-md" to="/order/2">
          <h2 className="text-center text-xl font-bold">Order 2</h2>

          <div className="w-full text-center">
            <h2>Products: {'Product 1, Product 2'}</h2>
            <h2>Total products: {'3'}</h2>
            <h2>Total cost: {'2,500'}</h2>
          </div>
        </Link>

        <Link className="w-full p-2 rounded-md shadow-md" to="/order/3">
          <h2 className="text-center text-xl font-bold">Order 3</h2>

          <div className="w-full text-center">
            <h2>Products: {'Product 1, Product 2'}</h2>
            <h2>Total products: {'3'}</h2>
            <h2>Total cost: {'2,500'}</h2>
          </div>
        </Link>
      </section>
    </section>
  )
}

export default Order
