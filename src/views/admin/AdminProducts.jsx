import { useState } from 'react'
import EditProduct from './EditProduct'
import {
  HiOutlineTrash,
  HiOutlinePencil,
  HiOutlinePlusCircle
} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {
  useDeleteProductMutation,
  useGetAllProductsQuery
} from '../../store/service/product/productService'
import Swal from 'sweetalert2'

export const AdminProducts = ({ handleScreen }) => {
  const [searchString, setSearchString] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [id, setId] = useState(null)
  const { data } = useGetAllProductsQuery(null)
  const products = data?.results
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = () => {
    Swal.fire({
      target: 'main',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#fefefe',
      backdrop: true,
      background: '#DE76B5',
      color: '#fefefe',
      title: 'Product has been deleted!',
      showConfirmButton: false,
      timer: 1200
    })
  }

  return (
    <section className='py-4 px-4 flex flex-col static items-center '>
      <div className='w-full xl:w-1/2 dark:bg-black bg-white rounded-md px-2 py-4 drop-shadow-xl'>
        <div className='flex flex-col md:flex-row justify-evenly '>
          <section className='w=1/3 flex relative rounded-md items-center'>
            <div className='absolute top-5 left-1'>
              <img
                src='https://img.icons8.com/ios/256/search.png'
                alt='search'
                className='object-contain h-4 w-4'
              />
            </div>
            <input
              type='text'
              className='h-10 w-full pl-10 pr-20 rounded-md z-0 focus:shadow focus:outline-none dark:bg-black-variant shadow-md dark:text-white'
              placeholder='Search by product name...'
              onChange={(e) => { setSearchString(e.target.value) }}
            />
            <div className='absolute right-2'>
              <button className='h-9 rounded-lg bg-gray-400 text-white px-1 dark:bg-gray-variant hover:bg-primary'>
                Search
              </button>
            </div>
          </section>
          <div className='flex flex-row justify-between gap-3'>
            <button
              onClick={() => handleScreen('categories')}
              className='flex mt-2  drop-shadow  items-center p-2 border border-primary hover:scale-105 hover:opacity-80 text-primary text-xs md:text-lg rounded-md'
            >
              <HiOutlinePlusCircle className='mx-1 w-5 h-5 ' />
              Add category
            </button>
            <Link
              to='/admin/addproduct'
              className='flex mt-2  drop-shadow  items-center p-2 bg-primary hover:scale-105 hover:opacity-80 text-white text-xs md:text-lg rounded-md'
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
              return product?.name.toLowerCase().includes(searchString.toLocaleLowerCase()) ? product : null
            }).map((product, key) => {
              return (
                <tr
                  key={key}
                  className='text-center border-b-2 hover:bg-neutral-400 text-xs md:text-xl'
                >
                  <td>{product?.id}</td>
                  <td>{product?.name}</td>
                  <td>{product?.Category?.name}</td>
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
                    <button onClick={() => {
                      deleteProduct(product.id)
                      handleDelete()
                    }}
                    >
                      <HiOutlineTrash className='w-4 h-4 md:w-6 md:h-6 hover:text-red-600 m-1' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      <EditProduct open={openModal} onClose={() => setOpenModal(false)} productId={id} />

    </section>
  )
}

export default AdminProducts
