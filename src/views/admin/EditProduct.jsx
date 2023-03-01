import React from 'react'
import { Button } from '../../components/Filter/Button'

const EditProduct = () => {
  return (
    <section className='flex flex-col h-full px-3 py-4 bg-white border border-2 mx-3 rounded-md w-full md:w-1/3 justify-self-center '>
        
        <section className='flex flex-col'>
           <h2 className="font-bold text-center text-2xl mb-4">Edit/Create product</h2> 
            <section className='flex flex-row w-full gap-4'>
                <section className="mb-4 w-1/4" >
                <label  className='block font-bold mb-4'>
                    id
                </label>
                <input
                    type='text'
                    id='productName'
                    placeholder='productName'
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                />
                </section>
                <section className="mb-4 w-3/4" >
                <label  className='block font-bold mb-4'>
                    Name
                </label>
                <input
                    type='text'
                    id='productName'
                    placeholder='productName'
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                />
                </section>
            </section>
            
            <section className="mb-4 w-4/4" >
                <label  className='block font-bold mb-4'>
                    Description
                </label>
                <input
                    type='text'
                    id='productDescription'
                    placeholder=''
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                />
            </section>

            <section className='flex flex-row gap-4'>
                <section className="mb-4 w-2/4" >
                <label  className='block font-bold mb-4'>
                    Category
                </label>
                <input
                    type='text'
                    id='productDescription'
                    placeholder=''
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                />
                </section>
                <section className="mb-4 w-2/4" >
                <label  className='block font-bold mb-4'>
                    Subcategory
                </label>
                <input
                    type='text'
                    id='productDescription'
                    placeholder=''
                    className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
                />
                </section>
            </section>
        </section>

        <section className='flex flex-row gap-4'>
            <section className="mb-4 w-1/4" >
            <label  className='block font-bold mb-4'>
                Color
            </label>
            <input
                type='text'
                id='productDescription'
                placeholder=''
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            />
            </section>
            <section className="mb-4 w-1/4" >
            <label  className='block font-bold mb-4'>
                Stock
            </label>
            <input
                type='text'
                id='productDescription'
                placeholder=''
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            />
            </section>
            <section className="mb-4 w-1/4" >
            <label  className='block font-bold mb-4'>
                Price
            </label>
            <input
                type='text'
                id='productDescription'
                placeholder=''
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            />
            </section>
            <section className="mb-4 w-1/4" >
            <label  className='block font-bold mb-4'>
                Discount
            </label>
            <input
                type='text'
                id='productDescription'
                placeholder=''
                className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            />
            </section>
        </section>
        <div className='flex flex-row justify-between'>
            <p>Created</p>
            <div className='flex flex-row justify-end'>
                <Button btntxt={"Cancel"}/>
                <Button btntxt={"Save"}/>   
            </div>
            
        </div>
    </section>
  )
}

export default EditProduct