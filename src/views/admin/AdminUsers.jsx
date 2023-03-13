import { useGetAllUsersQuery } from '../../store/service/user/userService'

const AdminUsers = () => {
  const { data: users } = useGetAllUsersQuery()

  return (
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
                <th>{user?.role.name}</th>
                <th>{user?.statusId === 1 ? 'active' : 'inactive'}</th>
                <th />
              </tr>
            )
          })
        }

      </table>
    </div>
  )
}

export default AdminUsers
