import { useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import { useCreateProductMutation } from '../../store/service/product/productService'

const AddProduct = () => {
  const [createProduct] = useCreateProductMutation()
  const [fileData, setFiledata] = useState()
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: null,
    stock: null,
    categoryId: 1,
    subcategoryId: null,
  })

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    })
  }

  const fileChangeHandler = (e) => {
    setFiledata(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', product.name)
    formData.append('description', product.description)
    formData.append('price', product.price)
    formData.append('stock', product.stock)
    formData.append('file', fileData)
    formData.append('categoryId', product.categoryId)
    formData.append('subcategoryId', product.subcategoryId)

    createProduct(formData)
  }

  return (
    <section className="flex flex-row justify-center my-4">
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-col h-full px-3 py-4 bg-white md:border-2 rounded-md w-full md:w-1/3"
      >
        <h2 className="font-bold text-center text-2xl mb-4">
          Edit/Create product
        </h2>
        <div className="flex flex-row ">
          <div className="w-1/3 h-full mx-2 flex flex-col justify-center self-center gap-3">
            <img
              src="https://picsum.photos/1920/800"
              alt="Banner"
              className="object-cover w-full h-1/3 md:h-1/2"
            />
            <label className="flex justify-center border bg-gray-variant rounded text-white p-1 hover:bg-primary">
              <BsUpload className="h-5 w-5 mx-1" />
              <input
                multiple
                className="hidden w-1"
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg image/jpg"
                onChange={fileChangeHandler}
              />
              Upload image
            </label>
          </div>
          <section className="flex flex-col">
            <section className="flex flex-row w-full gap-4">
              <section className="mb-4 w-1/4">
                <label className="block font-bold mb-4">Id</label>
                <input
                  type="text"
                  id="id"
                  placeholder="
                  #"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                  disabled
                />
              </section>
              <section className="mb-4 w-3/4">
                <label className="block font-bold mb-4">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Product name"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                  onChange={handleChange}
                />
              </section>
            </section>

            <section className="mb-4 w-4/4">
              <label className="block font-bold mb-4">Description</label>
              <input
                type="text"
                id="description"
                placeholder="Add a product description"
                className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                onChange={handleChange}
              />
            </section>

            <section className="flex flex-row gap-4">
              <section className="mb-4 w-2/4">
                <label className="block font-bold mb-4">Category</label>
                <select className="border rounded w-full h-11">
                  <option>-Select a category-</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </section>
              <section className="mb-4 w-2/4">
                <label className="block font-bold mb-4">Subcategory</label>
                <input
                  type="number"
                  id="subcategoryId"
                  placeholder="subcategory"
                  className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
                  onChange={handleChange}
                />
              </section>
            </section>
          </section>
        </div>

        <section className="flex flex-row gap-4">
          <section className="mb-4 w-1/4">
            <label className="block font-bold mb-4">Color</label>
            <input
              type="text"
              id="color"
              placeholder=""
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
            />
          </section>
          <section className="mb-4 w-1/4">
            <label className="block font-bold mb-4">Stock</label>
            <input
              type="text"
              id="stock"
              placeholder=""
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
              onChange={handleChange}
            />
          </section>
          <section className="mb-4 w-1/4">
            <label className="block font-bold mb-4">Price</label>
            <input
              type="text"
              id="price"
              placeholder=""
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
              onChange={handleChange}
            />
          </section>
          <section className="mb-4 w-1/4">
            <label className="block font-bold mb-4">Discount</label>
            <input
              type="text"
              id="discount"
              placeholder=""
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
            />
          </section>
        </section>

        <div className="flex flex-row justify-between ">
          <p>Created</p>
          <div className="flex flex-row justify-end gap-3">
            <button className="bg-primary rounded p-2 hover:opacity-70 text-white">
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default AddProduct
