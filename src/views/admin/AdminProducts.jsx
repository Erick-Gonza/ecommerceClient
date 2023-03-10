import { useState } from 'react'
import EditProduct from './EditProduct'
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiFilter,
  HiOutlinePlusCircle
} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {
  useDeleteProductMutation,
  useGetAllProductsQuery
} from '../../store/service/product/productService'

export const AdminProducts = () => {
  const [searchString, setSearchString] = useState('')
  const [deleteProduct] = useDeleteProductMutation()
  const [openModal, setOpenModal] = useState(false)
  const [id, setId] = useState(null)
  const { data, isError, isLoading, error } = useGetAllProductsQuery()
  console.log({ data, isError, isLoading, error })
  const products = data?.data
  console.log(products)

  return (
    <section className='py-4 px-6 flex flex-col static items-center '>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-between'>
          <section className='w=1/3 flex relative border-2 rounded-md items-center  '>
            <div className='absolute top-5 left-1'>
              <img
                src='https://img.icons8.com/ios/256/search.png'
                alt='search'
                className='object-contain h-4 w-4'
              />
            </div>
            <input
              type='text'
              className='h-10 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
              placeholder='Search by product name...'
              onChange={(e) => { setSearchString(e.target.value) }}
            />
            <div className='absolute right-2'>
              <button className='h-10 rounded-lg bg-gray-400 text-white px-1'>
                Search
              </button>
            </div>
          </section>
          <div className='flex flex-row justify-between gap-3'>
            <button className='flex mt-2 border border-black  items-center p-2 hover:scale-105  '>
              <HiFilter className='mx-1 w-5 h-5' />
              Filter
            </button>
            <Link
              to='/admin/editcategory'
              className='flex mt-2  drop-shadow  items-center p-2 border border-primary hover:scale-105 hover:opacity-80 text-primary text-xs md:text-lg'
            >
              <HiOutlinePlusCircle className='mx-1 w-5 h-5 ' />
              Add category
            </Link>
            <Link
              to='/admin/addproduct'
              className='flex mt-2  drop-shadow  items-center p-2 bg-primary hover:scale-105 hover:opacity-80 text-white text-xs md:text-lg'
            >
              <HiOutlinePlusCircle className='mx-1 w-5 h-5 ' />
              Add product
            </Link>
          </div>
        </div>
        <div className='my-3 flex justify-center '>
          <table className='w-full md:w-4/5  '>
            <tr className='bg-primary text-xs md:text-xl '>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th className='hidden md:block'>Description</th>
              <th>Color</th>
              <th>Price</th>
              <th>Stock</th>
              <th />
            </tr>
            {products?.filter((product) => {
              if (searchString === '') {
                return product
              } else if (product.name.toLowerCase().includes(searchString.toLowerCase())) {
                return product
              }
              return product
            }).map((product, key) => {
              return (
                <tr
                  key={key}
                  className='text-center border-b-2 hover:bg-neutral-200 text-xs md:text-xl'
                >
                  <td>{product?.id}</td>
                  <td>{product?.name}</td>
                  <td>{product?.Category.name}</td>
                  <td className='hidden md:block'>{product?.description}</td>
                  <td>{product?.color}</td>
                  <td>{product?.price}</td>
                  <td>{product?.stock}</td>
                  <td className='flex flex-row'>
                    <button onClick={() => {
                      setOpenModal(true)
                      setId(product.id)
                    }}
                    >
                      <HiOutlinePencil className='w-4 h-4 md:w-6 md:h-6 hover:text-green-600 m-1' />
                    </button>
                    <button onClick={() => deleteProduct(product.id)}>
                      <HiOutlineTrash className='w-4 h-4 md:w-6 md:h-6 hover:text-red-600 m-1' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
        <div className='flex justify-end'>
          <button className='flex mt-2 drop-shadow items-center px-4 py-2 bg-gray-variant hover:scale-105 hover:opacity-90 text-white text-xs md:text-lg'>
            Exit
          </button>
        </div>
      </div>
      <EditProduct open={openModal} onClose={() => setOpenModal(false)} productId={id} />

    </section>
  )
}

export default AdminProducts
