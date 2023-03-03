import { useEffect, useState } from 'react'
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiFilter,
  HiOutlinePlusCircle,
} from 'react-icons/hi'

import {
  useGetCategoryByIdQuery,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from '../../store/service/category/categoryService'

const EditCategory = () => {
  const [id, SetId] = useState()
  const { data, isError, isLoading, error } = useGetAllCategoriesQuery()
  const [createCategory] = useCreateCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()

  const categories = data?.data

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value.trim()
    createCategory({ name })
  }

  return (
    <section className="flex flex-row justify-center my-4">
      <section className="flex flex-col h-full px-3 py-4 bg-white md:border-2 rounded-md w-full md:w-1/3 ">
        <h2 className="font-bold text-center text-2xl mb-4">
          Admin Categories
        </h2>

        <div className="flex flex-row h-1/2 w-full justify-evenly">
          <table className="border w-full">
            <thead>
              <tr className="bg-primary">
                <th className="border">Id</th>
                <th className="border">Name</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {categories?.map((category, key) => {
                return (
                  <tr
                    key={key}
                    className="hover:bg-gray-variant hover:bg-opacity-50 cursor-pointer"
                  >
                    <td className="border">{category.id}</td>
                    <td className="border">{category.name}</td>
                    <td className="border">
                      <button>
                        <HiOutlinePencil className="w-4 h-4 md:w-6 md:h-6 hover:text-green-600 m-1" />
                      </button>
                      <button onClick={() => deleteCategory(category.id)}>
                        <HiOutlineTrash className="w-4 h-4 md:w-6 md:h-6 hover:text-red-600 m-1" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <div className="w-full flex flex-col px-3">
            <form onSubmit={handleSubmit} className="mb-4 w-full">
              <label className="block font-bold mb-4">Id</label>
              <input
                type="text"
                id="id"
                placeholder="
              #"
                className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                disabled
              />
              <label className="block font-bold mb-4">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Category name"
                className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
              />
              <button className="w-full text-center mt-2 py-2 border rounded bg-primary text-white">
                Confirm
              </button>
            </form>
          </div>
        </div>

        <div className="flex-col md:flex-row justify-between hidden">
          <div className="my-3">
            <h2 className="text-xl font-bold text-center">Admin subcategory</h2>
            <div className="flex flex-row w-full justify-evenly">
              <table className="border w-1/2">
                <tr className="bg-primary">
                  <th className="border">Id</th>
                  <th className="border">Subcategory</th>
                </tr>
                <tr className="hover:bg-gray-variant hover:bg-opacity-50">
                  <td className="border">1</td>
                  <td className="border">Pants</td>
                </tr>
                <tr className="hover:bg-gray-variant hover:bg-opacity-50">
                  <td className="border">2</td>
                  <td className="border">Dress</td>
                </tr>
              </table>

              <section className="mb-4 w-1/3">
                <label className="block font-bold mb-4">Id</label>
                <input
                  type="text"
                  id="productName"
                  placeholder="
              #"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                  disabled
                />
                <label className="block font-bold mb-4">Category</label>
                <input
                  type="text"
                  id="productName"
                  placeholder="Category"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                />
                <label className="block font-bold mb-4">Name</label>
                <input
                  type="text"
                  id="productName"
                  placeholder="Name"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                />
                <button className="w-full text-center mt-2 py-2 border rounded bg-primary text-white">
                  Confirm
                </button>
              </section>
            </div>
          </div>
          <div className="flex flex-row justify-end items-end  gap-3">
            <button className="md:h-1/6 border border-black rounded p-2 hover:bg-black hover:text-white">
              Cancel
            </button>
            <button className=" md:h-1/6 bg-primary rounded p-2 hover:opacity-70 text-white">
              Save
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default EditCategory
