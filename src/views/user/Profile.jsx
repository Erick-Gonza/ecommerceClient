import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserByIdQuery } from '../../store/service/user/userService'

const Profile = () => {
  const { id } = useParams()
  const { data: user, isError, isLoading, error } = useGetUserByIdQuery(id)
  const users = user?.data
  console.log(error, isError, isLoading)

  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <section className='w-full flex flex-col justify-center items-center px-4 py-2'>
      <section className='w-full'>
        <h2 className='text-center text-2xl font-bold'>My Account</h2>
      </section>

      <section className='flex w-full flex-col justify-center items-center md:items-end md:flex-row mt-2 relative '>
        <section className='flex md:w-1/2 gap-4 px-1 py-5'>
          <section className='flex flex-col gap-y-2 w-1/2 text-right '>
            <h2 className='p-1'>FirstName</h2>
            <h2 className='p-1'>LastName</h2>
            <h2 className='p-1'>UserName</h2>
            <h2 className='p-1'>Email</h2>
          </section>
          {!isEditMode
            ? (
              <section className='flex flex-col md:w-1/2 gap-y-2'>
                <h2 className='p-1'>{users?.firstName}</h2>
                <h2 className='p-1'>{users?.lastName}</h2>
                <h2 className='p-1'>{users?.userName}</h2>
                <h2 className='p-1'>{users?.email}</h2>
              </section>
              )
            : (
              <form className='flex flex-col gap-2 md:w-1/2  w-1/2 px-5'>
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='FirstName'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='LastName'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='UserName'
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  placeholder='Email'
                />
              </form>
              )}
        </section>
        <button
          onClick={toggleEditMode}
          className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
        >
          {isEditMode ? 'Save' : 'Edit Info'}
        </button>
      </section>
    </section>
  )
}

export default Profile
