import { Link } from 'react-router-dom'

const dataUser = {
  name: 'testName',
  lastName: 'testLastName',
  userName: 'testUserName',
  email: 'test@test.com',
  address: 'test address',
}

const Profile = () => {
  return (
    <section className="w-full flex flex-col items-center drop-shadow-2xl">
      <section className="lg:px-48 lg:text-left lg:w-full text-2xl text-center object-center full font-bold justify-center flex flex-col flex-wrap ">
        My Account
      </section>

      <section className="lg:w-full lg:flex lg:flex-row lg:items-left items-end ">
        <section className="lg:w-3/4 lg:items-left w-full flex  ">
          <section className="lg:w-1/4 px-1 py-5 text-right w-1/2 flex-col ">
            <h3>Name:</h3>
            <h3>Lastname:</h3>
            <h3>Username:</h3>
            <h3>email:</h3>
            <h3>Address:</h3>
          </section>

          <section className="px-1 w-1/2 py-5 ">
            <h3>{dataUser?.name}</h3>
            <h3>{dataUser?.lastName}</h3>
            <h3>{dataUser?.userName}</h3>
            <h3>{dataUser?.email}</h3>
            <h3>{dataUser?.address}</h3>
          </section>
        </section>

        <section className="hover:scale-105 hover:shadow-md w-40 flex justify-center items-center bg-primary text-white font-bold px-3 py-2 rounded-sm mt-4 mb-4 cursor-pointer h-10 ">
          <Link to="/editprofile" className="">
            Edit Info
          </Link>
        </section>
      </section>
    </section>
  )
}

export default Profile
