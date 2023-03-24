import { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../store/service/user/userService'

const Profile = () => {
  const { id } = useContext(AuthContext)
  const { data: user } = useGetUserByIdQuery(id)
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
    <section className='flex w-full justify-center items-center'>
      <section className='flex flex-col px-4 py-7 bg-white w-full md:w-1/3 dark:bg-black rounded-md shadow-lg items-center'>
        <section className='w-full'>
          <h2 className='text-center text-2xl font-bold'>My Account</h2>
        </section>

        <section className='flex w-full flex-col justify-center items-right md:items-end md:flex-row mt-2 relative'>
          <section className='flex md:w-full gap-4 px-1 py-5'>
            <section className='flex flex-col gap-y-2 w-1/3 text-right'>
              <h2 className='p-1'>FirstName</h2>
              <h2 className='p-1'>LastName</h2>
              <h2 className='p-1'>UserName</h2>
              <h2 className='p-1'>Email</h2>
            </section>
            {!isEditMode
              ? (
                <section className='flex flex-col w-2/3 gap-y-2'>
                  <h2 className='p-1'>{users?.firstName}</h2>
                  <h2 className='p-1'>{users?.lastName}</h2>
                  <h2 className='p-1'>{users?.userName}</h2>
                  <h2 className='p-1'>{users?.email}</h2>
                </section>
                )
              : (
                <form className='flex flex-col gap-2 md:w-1/2  w-1/2 px-5'>
                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='text'
                    id='name'
                    value={userEdit.firstName}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, firstName: e.target.value })}
                  />
                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='text'
                    id='lastName'
                    value={userEdit.lastName}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, lastName: e.target.value })}
                  />
                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='text'
                    id='username'
                    value={userEdit.userName}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, userName: e.target.value })}
                  />
                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='text'
                    id='email'
                    value={userEdit.email}
                    onChange={(e) =>
                      setUserEdit({ ...userEdit, email: e.target.value })}
                  />
                </form>
                )}
          </section>
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
              onClick={() => {
                updateUser(userEdit)
                toggleEditMode()
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
                  title: 'Data successfully updated',
                  showConfirmButton: false,
                  timer: 1500
                })
              }}
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
