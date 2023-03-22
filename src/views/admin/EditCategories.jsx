import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditCategories = ({ handleSubmit }) => {
  const Category = () => {
    const { id } = useParams()
  }

  return (
    <section className='flex bg-white flex-col  absolute rounded-md border drop-shadow-md w-full md:w-1/3 '>
      <div className='flex flex-col items-center'>
        <div className='w-full flex flex-col px-3'>
          <form onSubmit={handleSubmit} className='mb-4 w-full'>
            <label className='block font-bold mb-4'>Id</label>
            <input
              type='text'
              id='id'
              placeholder={Category?.id}
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
            <label className='block font-bold mb-4'>Description</label>
            <input
              type='text'
              id='Description'
              placeholder='Description'
              className='border-2 w-full p-2 rounded-md placeholder-gray shadow-md'
            />
            <button
              type='button'
              className='w-full text-center mt-2 py-2 border rounded bg-primary text-white'
              onClick={() => {
                console.log('Button clicked');
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
                  title: 'Product has been added to Cart',
                  showConfirmButton: false,
                  timer: 1200
                });
              }}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCategories;