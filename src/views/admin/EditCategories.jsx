import React from 'react'

const EditCategories = ({ handleSubmit }) => {
  <section className='flex bg-white flex-col  absolute rounded-md border drop-shadow-md w-full md:w-1/3 '>
    <div className='flex flex-col items-center'>
      <div className='w-full flex flex-col px-3'>
        <form onSubmit={handleSubmit} className='mb-4 w-full'>
          <label className='block font-bold mb-4'>Id</label>
          <input
            type='text'
            id='id'
            placeholder='#'
            className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            disabled
          />
          <label className='block font-bold mb-4'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Category name'
            className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
          />
          <button className='w-full text-center mt-2 py-2 border rounded bg-primary text-white'>
            Confirm
          </button>
        </form>
      </div>
    </div>

  </section>
}

export default EditCategories
