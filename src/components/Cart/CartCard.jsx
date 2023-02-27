import React from 'react'

export const CartCard = ({ name, description, price }) => {
  return (
    <div className="container grid grid-cols-6 gap-1 shadow-sm  p-1 ">
      <section className="h-32  col-span-2 ">
        <img
          src="https://picsum.photos/1920/800"
          alt="Banner"
          className="object-cover w-full h-full"
        />
      </section>

      <section className="flex flex-col w-ful col-span-3 grid grid-rows-5">
        <p className="font-bold">{name}</p>
        <p className="row-span-3">{description}</p>
        <div className="flex flex-row">
          <button className="w-6" onClick={''}>
            -
          </button>
          <div className="border w-6" onClick={''}>
            <h3 className="text-center "> 3 </h3>
          </div>
          <button className="w-6" onClick={''}>
            +
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-between ">
        <button className="flex justify-end" onClick={''}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p>{price}</p>
      </section>
    </div>
  )
}
