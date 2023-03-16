import { useState } from 'react'

// import Form from '../components/Form/Form'

const Address = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const dataUser = {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <section className='w-full flex flex-col justify-center items-center px-4 py-7'>
      <section className='w-full'>
        <h2 className='text-center text-2xl font-bold'>My Address</h2>
      </section>

      <section className='flex w-full flex-col justify-center items-right md:items-end md:flex-row mt-2 relative'>
        <section className='flex md:w-1/2 gap-4 px-1 py-5'>
          <section className='flex flex-col gap-y-2 w-1/2 text-right'>
            <h2 className='p-1'>Street</h2>
            <h2 className='p-1'>City</h2>
            <h2 className='p-1'>State</h2>
            <h2 className='p-1'>ZipCode</h2>
            <h2 className='p-1'>Country</h2>
          </section>

          {!isEditMode
            ? (
              <section className='flex flex-col md:w-1/2 gap-y-2'>
                <h2 className='p-1'>{dataUser?.street}</h2>
                <h2 className='p-1'>{dataUser?.city}</h2>
                <h2 className='p-1'>{dataUser?.state}</h2>
                <h2 className='p-1'>{dataUser?.zipCode}</h2>
                <h2 className='p-1'>{dataUser?.country}</h2>
              </section>
              )
            : (
              <form className='flex flex-col gap-2 md:w-1/2 w-1/2 px-5'>
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='Street'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='City'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='State'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='#'
                  placeholder='ZipCode'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='Country'
                />
              </form>
              )}
        </section>

        <button
          onClick={toggleEditMode}
          className='flex w-40 hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
        >
          {isEditMode ? 'Save' : 'Edit'}
        </button>
      </section>
    </section>
  )
}

export default Address
