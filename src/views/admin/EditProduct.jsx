import { useEffect, useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useGetAllCategoriesQuery } from '../../store/service/category/categoryService'
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../store/service/product/productService'

const EditProduct = ({ open, onClose, productId }) => {
  const { data } = useGetProductByIdQuery(productId)
  const [product, setProduct] = useState({
    id: productId,
    name: '',
    description: '',
    color: ''
  })
  const [updateProduct] = useUpdateProductMutation()
  const { data: categoriesData } = useGetAllCategoriesQuery()
  const categories = categoriesData?.data

  const handleUpdateProduct = (e) => {
    e.preventDefault()
    updateProduct({ ...product })
    onClose()
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
      title: 'Product has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }

  useEffect(() => {
    setProduct({
      id: productId,
      name: data?.data?.name,
      description: data?.data?.description,
      color: data?.data?.color,
      price: data?.data?.price,
      categoryId: data?.data?.categoryId,
      stock: data?.data?.stock
    })
  }, [data])

  if (!open) return null
  return (
    <section className='flex bg-white dark:bg-black flex-col  absolute rounded-md border drop-shadow-md w-full md:w-1/2 '>
      <div className='flex flex-col items-center'>
        <form className='flex flex-col px-3 py-4 bg-white dark:bg-black'>
          <h2 className='font-bold text-center text-2xl mb-4'>Edit product</h2>
          <div className='flex flex-row'>
            <div className='w-1/3 h-full mx-2 flex flex-col justify-center self-center gap-3'>
              <img
                src='https://picsum.photos/1920'
                alt='Banner'
                className='object-contain rounded shadow-md w-full h-full bg-black'
              />
              <label className='flex justify-center border bg-gray-variant rounded text-white p-1 hover:bg-primary'>
                <BsUpload className='h-5 w-5 mx-1' />
                <input className='hidden w-full' type='file' name='file' />
                Upload image
              </label>
            </div>
            <section className='flex flex-col'>
              <section className='flex flex-row w-full gap-4 px-4'>
                <section className='mb-4 w-1/4'>
                  <label className='block font-bold mb-4'>Id</label>
                  <input
                    type='text'
                    id='productName'
                    placeholder={productId}
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                    disabled
                  />
                </section>
                <section className='mb-4 w-3/4'>
                  <label className='block font-bold mb-4'>Name</label>
                  <input
                    type='text'
                    id='productName'
                    placeholder='Product name'
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })}
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                  />
                </section>
              </section>

              <section className='mb-4 w-full px-4'>
                <label className='block font-bold mb-4'>Description</label>
                <input
                  type='text'
                  id='productDescription'
                  placeholder='Add a product description'
                  value={product.description}
                  className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })}
                />
              </section>

              <section className='flex flex-row gap-4'>
                <section className='mb-4 w-full px-4'>
                  <label className='block font-bold mb-4'>Category</label>
                  <select
                    onChange={(e) =>
                      setProduct({ ...product, categoryId: e.target.value })} id='categoryId' className='border rounded w-full h-11 dark:bg-black-variant'
                  >
                    <option>-Select a category-</option>
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

          <section className='flex flex-row gap-10 justify-center'>
            <section className='mb-4 w-1/4'>
              <label className='block font-bold mb-4'>Color</label>
              <input
                type='text'
                id='color'
                placeholder=''
                value={product.color}
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                onChange={(e) =>
                  setProduct({ ...product, color: e.target.value })}
              />
            </section>
            <section className='mb-4 w-1/4'>
              <label className='block font-bold mb-4'>Stock</label>
              <input
                type='text'
                id='stock'
                placeholder=''
                value={product.stock}
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })}
              />
            </section>
            <section className='mb-4 w-1/4'>
              <label className='block font-bold mb-4'>Price</label>
              <input
                type='text'
                id='price'
                placeholder=''
                value={product.price}
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md dark:bg-black-variant'
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })}
              />
            </section>

          </section>

          <div className='flex flex-row justify-center'>
            <div className='flex flex-row justify-end gap-40'>
              <button onClick={onClose} className='border bg-gray-variant rounded-md p-2 hover:bg-primary hover:text-white w-28 h-10'>
                Cancel
              </button>
              <button onClick={handleUpdateProduct} className='bg-gray-variant hover:bg-primary hover:text-white rounded-md p-2 w-28 h-10'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

    </section>
  )
}

export default EditProduct
