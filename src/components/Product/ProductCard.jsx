import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Filter/Button'

export const ProductCard = ({ name, price, productId }) => {
  return (
    <div className="">
      <Link to={'/product/' + productId} className="">
        <div className="m:w-52 md:w-62 lg:w-72 sm:h-64 md:h-64 lg:h-72  mb-8 relative overflow-hidden group">
          <img
            src="https://picsum.photos/1920/800"
            alt="Banner"
            className="object-cover w-full h-full"
          />
          <div className="sm:bg-transparent md:bg-primary sm:inline-flex sm:opacity-100 md:absolute w-full sm:h16 md:h-20 bottom-0  md:opacity-0 group-hover:opacity-100 flex flex-cols justify-between px-3 ">
            <div className="sm:text-black md:text-white py-2">
              <p>{name}</p>
              <p>{'$' + price}</p>
            </div>
            <div className="py-2 grid grid-rows-2 ">
              <div></div>
              <Button btntxt="Buy now" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
