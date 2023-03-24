import { useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useGetAllCategoriesQuery } from '../../store/service/category/categoryService'
import { useCreateProductMutation } from '../../store/service/product/productService'

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation()
  const { data } = useGetAllCategoriesQuery()
  const [fileData, setFileData] = useState()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: null,
    stock: null,
    categoryId: null,
    color: ''
  })
  const [image, setImage] = useState()
  const categories = data?.data

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value
    })
  }

  const url = image
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0])
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', product.name)
    formData.append('description', product.description)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    formData.append('file', fileData)
    formData.append('categoryId', product.categoryId)
    formData.append('color', product.color)
    createProduct(formData)
    Swal.fire({
      target: 'main',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#efefef',
      backdrop: true,
      background: '#DE76B5',
      color: '#fefefe',
      title: 'Product has been created',
      showConfirmButton: false,
      timer: 1200
    })
    setTimeout(() => {
      window.location.href = '/admin'
    }, 1200)
  }

  return (
    <section className='flex flex-row justify-center my-4 text-xs md:text-lg'>
      <form
        encType='multipart/form-data'
        onSubmit={handleSubmit}
        className='flex flex-col h-full px-3 py-4 bg-white rounded-md w-full lg:w-1/2 dark:bg-black shadow-xl items-center'
      >
        <h2 className='font-bold text-center text-xl mb-4'>
          Create product
        </h2>
        <div className='flex flex-row'>
          <div className='px-2 h-full w-1/3 dark:bg-black-variant mx-2 flex flex-col justify-center self-center gap-3 border-2 rounded-md'>
            <img
              src={url}
              alt='Banner'
              className='flex object-cover w-full h-1/3 md:h-1/2 '
            />
            <label className='flex justify-center border bg-gray-variant rounded text-white p-1 hover:bg-primary '>
              <BsUpload className='h-5 w-5 mx-1' />
              <input
                multiple
                className='hidden w-1 object-cover aspect-square drop-shadow-lg rounded-md '
                type='file'
                name='file'
                id='file'
                accept='image/png, image/jpeg image/jpg'
                onChange={fileChangeHandler}
              />
              Upload image
            </label>
          </div>
          <section className='flex flex-col'>
            <section className='flex flex-row w-full gap-4'>
              <section className='mb-4 w-1/4'>
                <label className='block font-bold mb-4'>Id</label>
                <input
                  type='text'
                  id='id'
                  placeholder='
                  #'
                  className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                  disabled
                />
              </section>
              <section className='mb-4 w-3/4'>
                <label className='block font-bold mb-4'>Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Product name'
                  className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                  onChange={handleChange}
                />
              </section>
            </section>

            <section className='mb-4 w-4/4'>
              <label className='block font-bold mb-4'>Description</label>
              <input
                type='text'
                id='description'
                placeholder='Add a product description'
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                onChange={handleChange}
              />
            </section>

            <section className='flex flex-row gap-4'>
              <section className='mb-4 w-2/4'>
                <label className='block font-bold mb-4'>Category</label>
                <select onChange={handleChange} id='categoryId' className='border rounded w-full h-11 dark:bg-black-variant'>
                  <option value='none'>-Select a category-</option>
                  {categories?.map((category, key) => {
                    return (
                      <option key={key} value={category?.id}>{category?.name}</option>
                    )
                  })}
                </select>
              </section>
            </section>
          </section>
        </div>

        <section className='flex flex-row gap-4 m-4 text-center'>
          <section className='mb-4 w-1/4'>
            <label className='block font-bold mb-4'>Color</label>
            <input
              type='text'
              id='color'
              placeholder=''
              className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
              onChange={handleChange}
            />
          </section>
          <section className='mb-4 w-1/4'>
            <label className='block font-bold mb-4'>Stock</label>
            <input
              type='text'
              id='stock'
              placeholder=''
              className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
              onChange={handleChange}
            />
          </section>
          <section className='mb-4 w-1/4'>
            <label className='block font-bold mb-4'>Price</label>
            <input
              type='text'
              id='price'
              placeholder=''
              className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
              onChange={handleChange}
            />
          </section>
        </section>

        <section className='w-full object-center'>
          <div className='flex flex-row justify-evenly px-2 w-full'>
            <Link to='/admin'>
              <button
                className='bg-gray-variant hover:bg-primary shadow-md rounded-md p-2 text-white w-24'
              >
                Cancel
              </button>
            </Link>
            <div className='flex flex-row justify-end gap-3'>
              <button
                type='submit'
                className='bg-gray-variant hover:bg-primary shadow-md rounded-md p-2 text-white w-24'
              >
                Save
              </button>
            </div>
          </div>
        </section>
      </form>
    </section>
  )
}

export default AddProduct
