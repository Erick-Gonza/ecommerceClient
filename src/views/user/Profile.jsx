import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../store/service/user/userService'

const Profile = () => {
  const { id } = useContext(AuthContext)
  const { data: user, isError, isLoading, error } = useGetUserByIdQuery(id)
  const users = user?.data
  const [isEditMode, setIsEditMode] = useState(false)
  const [updateUser] = useUpdateUserMutation()
  const [userEdit, setUserEdit] = useState({ ...users })

  const toggleEditMode = (e) => {
    e.preventDefault()
    setIsEditMode(!isEditMode)
  }
  useEffect(() => {
    setUserEdit({
      id: users?.id,
      firstName: users?.firstName,
      lastName: users?.lastName,
      userName: users?.userName,
      email: users?.email
    })
  }, [users])

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
                  id='name'
                  value={userEdit.firstName}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, firstName: e.target.value })}
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  id='lastName'
                  value={userEdit.lastName}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, lastName: e.target.value })}
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  id='username'
                  value={userEdit.userName}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, userName: e.target.value })}
                />
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  id='email'
                  value={userEdit.email}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, email: e.target.value })}
                />
              </form>
              )}
        </section>
        {!isEditMode
          ? (
            <button
              onClick={toggleEditMode}
              className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
            >
              Edit Info
            </button>
            )

          : (
            <button
              onClick={() => updateUser(userEdit)}
              className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
            >
              Save
            </button>
            )}

      </section>
    </section>
  )
}

export default Profile
