import { useEffect, useState } from "react";
import { BsUpload } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/service/product/productService";


const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    subcategory: 1
  })
  const {id} = useParams()
  const {data, isLoading, isSuccess} = useGetProductByIdQuery(id, )
  console.log(data)

  if(isLoading){
    return <>loading</>
  }

  useEffect(() => {
    setProduct({
      name: data.data.name ,
      subcategory: data.data.subcategory
    })
  }, [data])
  
  return (
    <section className='flex flex-row justify-center my-4'>
      <form  className="flex flex-col h-full px-3 py-4 bg-white md:border-2 rounded-md w-full md:w-1/3 ">
        <h2 className="font-bold text-center text-2xl mb-4">
          Edit product
        </h2>
      <div className='flex flex-row '>
          
        <div className='w-1/3 h-full mx-2 flex flex-col justify-center self-center gap-3'>

        <img
          src="https://picsum.photos/1920/800"
          alt="Banner"
          className="object-cover w-full h-1/3 md:h-1/2"
        />
          <label className='flex justify-center border bg-gray-variant rounded text-white p-1 hover:bg-primary' >
            <BsUpload className='h-5 w-5 mx-1'/>
            <input className='hidden w-1'  type="file" name="file"></input>
            Upload image
          </label>
          
        </div>
      <section className="flex flex-col">
        
        <section className="flex flex-row w-full gap-4">
          <section className="mb-4 w-1/4">
            <label className="block font-bold mb-4">Id</label>
            <input
              type="text"
              id="productName"
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
              id="productName"
              placeholder="Product name"
              value={product.name}
              onChange={(e)=>setProduct({...product, name:e.target.value})}
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
            />
          </section>
        </section>

        <section className="mb-4 w-4/4">
          <label className="block font-bold mb-4">Description</label>
          <input
            type="text"
            id="productDescription"
            placeholder="Add a product description"
            className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
          />
        </section>

        <section className="flex flex-row gap-4">
          <section className="mb-4 w-2/4">
            <label className="block font-bold mb-4">Category</label>
            <select className='border rounded w-full h-11'>
            <option>-Select a category-</option>
            <option>Option 2</option>
            <option>Option 3</option>

            </select>
          </section>
          <section className="mb-4 w-2/4">
            <label className="block font-bold mb-4">Subcategory</label>
            <input
              type="text"
              id="subcategory"
              placeholder="Subcategory"
              
              className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
            
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
            id="productDescription"
            placeholder=""
            className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
          />
        </section>
        <section className="mb-4 w-1/4">
          <label className="block font-bold mb-4">Stock</label>
          <input
            type="text"
            id="productDescription"
            placeholder=""
            className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
          />
        </section>
        <section className="mb-4 w-1/4">
          <label className="block font-bold mb-4">Price</label>
          <input
            type="text"
            id="productDescription"
            placeholder=""
            className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
          />
        </section>
        <section className="mb-4 w-1/4">
          <label className="block font-bold mb-4">Discount</label>
          <input
            type="text"
            id="productDescription"
            placeholder=""
            className="border-2 w-full p-2 rounded-md placeholder-gray shadow-md"
          />
        </section>
      </section>

      <div className="flex flex-row justify-between ">
        <p>Created</p>
        <div className="flex flex-row justify-end gap-3">
          <button className='border border-black rounded p-2 hover:bg-black hover:text-white'>
            Cancel
          </button>
          <button className='bg-primary rounded p-2 hover:opacity-70 text-white'>
            Save
          </button>
        </div>
      </div>

    </form>
    </section>
    
  )
}

export default EditProduct
