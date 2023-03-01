import React from 'react'
import { HiOutlineTrash, HiOutlinePlus, HiOutlineMinusSm } from 'react-icons/hi'

export const CartCard = ({ name, description, price }) => {
  return (
    <div className="container grid grid-cols-6 gap-1 shadow-sm  p-1 cursor-pointer hover:scale-105 ">
      <section className="h-32  col-span-2 ">
        <img
          src="https://picsum.photos/1920/800"
          alt="Banner"
          className="object-cover w-full h-full"
        />
      </section>

      <section className="w-ful col-span-3 grid grid-rows-5">
        <p className="font-bold">{name}</p>
        <p className="row-span-3">{description}</p>
        <div className="flex flex-row">
          <button className="w-6">
            <HiOutlineMinusSm />
          </button>
          <div className="border w-6">
            <h3 className="text-center "> 3 </h3>
          </div>
          <button className="w-6">
            <HiOutlinePlus />
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-between ">
        <button className="flex justify-end">
          <HiOutlineTrash className="w-5 h-5 hover:text-red-600 m-1" />
        </button>
        <p>{price}</p>
      </section>
    </div>
  )
}
