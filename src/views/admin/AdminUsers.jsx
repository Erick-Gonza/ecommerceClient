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
          className={`w-full text-black border-b-2 ${
      screen === 'users' ? 'border-primary' : 'border-gray-200'
    }`}
          onClick={() => handleScreen('users')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Users</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${
      screen === 'products' ? 'border-primary' : 'border-gray-200'
    }`}
          onClick={() => handleScreen('products')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Products</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${
      screen === 'categories' ? 'border-primary' : 'border-gray-200'
    }`}
          onClick={() => handleScreen('categories')}
        >
          <p className='w-full font-bold text-xl px-1 py-2 dark:text-white-variant'>Categories</p>
        </button>
      </section>

      {screen === 'users' && (
        <div className='my-3 flex justify-center '>
          <table className='w-full md:w-4/5  '>
            <tr className='bg-primary text-xs md:text-xl '>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>userName</th>
              <th>role</th>
              <th>status</th>
              <th />
            </tr>
            {
          users?.data.map((user, key) => {
            return (
              <tr className='text-center border-b-2 hover:bg-neutral-200 text-xs md:text-xl' key={key}>
                <th>{user?.id}</th>
                <th>{`${user?.firstName} ${user?.lastName}`}</th>
                <th>{user?.email}</th>
                <th>{user?.userName}</th>
                <th>{user?.role?.name}</th>
                <th>{user?.statusId === 1 ? 'active' : 'inactive'}</th>
                <th />
              </tr>
            )
          })
        }

          </table>
        </div>
      )}

      {screen === 'categories' && <EditCategory />}

      {screen === 'products' && <AdminProducts handleScreen={handleScreen} />}

    </div>
  )
}

export default AdminUsers
