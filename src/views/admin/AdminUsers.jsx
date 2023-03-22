import { useState } from 'react'
import { useGetAllUsersQuery } from '../../store/service/user/userService'
import AdminProducts from './AdminProducts'
import EditCategory from './EditCategory'

const AdminUsers = () => {
  const [screen, setScreen] = useState('users')
  const { data: users } = useGetAllUsersQuery()

  const handleScreen = (screen) => {
    setScreen(screen)
  }

  return (
    <div>
      <section className='w-full flex gap-2 px-2 py-2'>
        <button
          className={`w-full text-black border-b-2 ${screen === 'users' ? 'border-primary' : 'border-gray-200'
            }`}
          onClick={() => handleScreen('users')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Users</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${screen === 'products' ? 'border-primary' : 'border-gray-200'
            }`}
          onClick={() => handleScreen('products')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Products</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${screen === 'categories' ? 'border-primary' : 'border-gray-200'
            }`}
          onClick={() => handleScreen('categories')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Categories</p>
        </button>
      </section>

      {screen === 'users' && (
        <div className='flex w-full flex-col justify-center items-right md:items-end md:flex-row mt-2 relative text-xs lg:text-xl px-4 font-semibold py-4'>
          <section className='flex md:w-1/3 gap-2 py-4 dark:bg-black bg-white shadow-xl rounded-md'>
            <section className='flex flex-col gap-y-2 w-1/4 text-right '>
              <h2 className='px-2 border border-transparent'>Id:</h2>
              <h2 className='px-2 border border-transparent'>Name:</h2>
              <h2 className='px-2 border border-transparent'>Email:</h2>
              <h2 className='px-2 border border-transparent'>UserName:</h2>
              <h2 className='px-2 border border-transparent'>Role:</h2>
              <h2 className='px-2 border border-transparent'>Status:</h2>
              <section />
            </section>
            {
              users?.data.map((user, key) => {
                return (
                  <section className='flex flex-col w-2/3 gap-y-2' key={key}>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{user?.id}</h2>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{`${user?.firstName} ${user?.lastName}`}</h2>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{user?.email}</h2>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{user?.userName}</h2>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{user?.role.name}</h2>
                    <h2 className='shadow-md border dark:bg-black-variant rounded px-2 gap-2' >{user?.statusId === 1 ? 'active' : 'inactive'}</h2>
                    <th />
                  </section>
                )
              })
            }
          </section>
        </div>
      )}

      {screen === 'categories' && <EditCategory />}

      {screen === 'products' && <AdminProducts handleScreen={handleScreen} />}

    </div>
  )
}

export default AdminUsers
