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
        <section className='flex justify-center py-4 px-4'>
          <section className='justify-items-center w-full md:w-1/2 text-center rounded-md border shadow-xl bg-white dark:bg-black py-4'>
            <section className='w-full inline-flex font-bold'>
              <div className='w-full md:w-1/6'>
                <span className='hidden md:inline-block '>Id:</span>
              </div>
              <div className='w-full md:w-1/4'>
                <span className='hidden md:inline-block '>Name:</span>
              </div>
              <div className='w-full md:w-1/4 '>
                <span className='hidden md:inline-block '>Email:</span>
              </div>
              <div className='w-full md:w-1/4 '>
                <span className='hidden md:inline-block '>UserName:</span>
              </div>
              <div className='w-full md:w-1/6 '>
                <span className='hidden md:inline-block '>Role:</span>
              </div>
              <div className='w-full md:w-1/6 '>
                <span className='hidden md:inline-block '>Status:</span>
              </div>
            </section>

            <ul className='w-full text-center rounded-md px-2'>
              {users?.data.map((user, key) => (
                <li key={key} className='flex flex-col md:flex-row py-4 md:py-2 px-2 border'>
                  <div className='w-full md:w-1/6 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>ID:</span>
                    {user?.id}
                  </div>
                  <div className='w-full md:w-1/4 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>Name:</span>
                    {`${user?.firstName} ${user?.lastName}`}
                  </div>
                  <div className='w-full md:w-1/4 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>Email:</span>
                    {user?.email}
                  </div>
                  <div className='w-full md:w-1/4 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>User:</span>
                    {user?.userName}
                  </div>
                  <div className='w-full md:w-1/6 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>Role:</span>
                    {user?.role?.name}
                  </div>
                  <div className='w-full md:w-1/6 font-semibold'>
                    <span className='inline-block md:hidden mr-2 font-bold'>Status:</span>
                    {user?.statusId === 1 ? 'active' : 'inactive'}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
      )}

      {screen === 'categories' && <EditCategory />}

      {screen === 'products' && <AdminProducts handleScreen={handleScreen} />}

    </div>
  )
}

export default AdminUsers
