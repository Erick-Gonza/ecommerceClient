import React from 'react'
import { Button } from '../../components/Filter/Button.jsx'
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiFilter,
  HiOutlinePlusCircle,
} from 'react-icons/hi'

const products = [
  {
    id: 1,
    name: 'Mochila',
    description: 'Lorem impsum',
    price: 23.99,
    imageUrl: '',
  },
  {
    id: 2,
    name: 'Vestido',
    description: 'Lorem impsum',
    price: 40.5,
    imageUrl: '',
  },
  {
    id: 2,
    name: 'Tenis',
    description: 'Lorem impsum',
    price: 60.4,
    imageUrl: '',
  },
]

export const AdminProducts = () => {
  return (
    <section className="my-4 mx-6">
      <div className="flex flex-row justify-between">
        <section className="flex relative border-2 rounded-md mx-3">
          <div className="absolute top-5 left-1">
            <img
              src="https://img.icons8.com/ios/256/search.png"
              alt="search"
              className="object-contain h-4 w-4"
            />
          </div>
          <input
            type="text"
            className="h-14 md:w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search by product name..."
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 rounded-lg bg-gray-400">Search</button>
          </div>
        </section>
        <div className="flex flex-row justify-between gap-3">
          <button className="flex border border-black h-1/2 items-center p-2 hover:scale-105 ">
            <HiFilter className="mx-1 w-5 h-5" />
            Filter
          </button>

          <button className="flex drop-shadow h-1/2 items-center p-2 bg-primary hover:scale-105 text-white">
            <HiOutlinePlusCircle className="mx-1 w-5 h-5" />
            Create new product
          </button>
        </div>
      </div>

      <div className="my-3 flex justify-center text-center">
        <table className="w-full">
          <tr className=" bg-primary">
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Color</th>
            <th>Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
          {products.map((product, key) => {
            return (
              <tr
                key={key}
                className="text-center border-b-2 hover:bg-neutral-200 "
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>Category</td>
                <td>{product.description}</td>
                <td>Color</td>
                <td>{product.price}</td>
                <td>43</td>
                <td className="flex">
                  <HiOutlinePencil className="w-5 h-5 hover:text-green-600 m-1" />
                  <HiOutlineTrash className="w-5 h-5 hover:text-red-600 m-1" />
                </td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="flex justify-end">
        <Button btntxt={'Exit'} />
      </div>
    </section>
  )
}

export default AdminProducts
