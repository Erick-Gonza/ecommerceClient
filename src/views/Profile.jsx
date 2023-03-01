import { useState } from 'react'

const dataUser = {
  name: 'testName',
  lastName: 'testLastName',
  userName: 'testUserName',
  email: 'test@test.com',
  address: 'test address',
}

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return (
    <section className="w-full flex flex-col justify-center items-center px-4 py-2 ">
      <section className="w-full">
        <h2 className="text-center text-2xl font-bold">My Account</h2>
      </section>

      <section className="flex flex-col justify-center items-center w-full md:flex-row md:justify-center md:gap-40 mt-2 relative">
        <section className="flex gap-4">
          <section className="">
            <h2 className="p-1">First Name</h2>
            <h2 className="p-1">Last Name</h2>
            <h2 className="p-1">userName</h2>
            <h2 className="p-1">email</h2>
            <h2 className="p-1">address</h2>
          </section>
          {!isEditMode ? (
            <section>
              <h2 className="p-1">First Name</h2>
              <h2 className="p-1">Last Name</h2>
              <h2 className="p-1">userName</h2>
              <h2 className="p-1">email</h2>
              <h2 className="p-1">address</h2>
            </section>
          ) : (
            <form className="w-1/4 px-1 py-5">
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Name"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Lastname"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Username"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Email"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Address"
              />
            </form>
          )}
        </section>
        <button
          onClick={toggleEditMode}
          className="flex hover:scale-105 hover:shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-sm mt-4 mb-4 cursor-pointer h-10"
        >
          {isEditMode ? 'Save' : 'Edit Info'}
        </button>
      </section>

      {/* <section className="lg:w-full lg:flex lg:flex-row object-right lg:items-end ">
        {isEditMode ? (
          <section className="lg:w-3/4 lg:items-left w-full flex">
            <section className="px-1 py-5 text-left w-1/2 flex-col">
              <h3>First Name:</h3>
              <h3>Last Name:</h3>
              <h3>Username:</h3>
              <h3>Email:</h3>
              <h3>Address:</h3>
            </section>

            <form className="w-1/4 px-1 py-5">
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Name"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Lastname"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Username"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Email"
              />
              <input
                className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant"
                type="text"
                placeholder="Address"
              />
            </form>
          </section>
        ) : (
          <>
            <section className="lg:w-3/4 lg:items-left w-full flex">
              <section className="px-1 py-5 text-right w-1/2 flex-col ">
                <h3>First Name:</h3>
                <h3>Last Name:</h3>
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
          </>
        )}

        <section className="lg:w-1/4 w-full items-center justify-center">
          <button
            onClick={toggleEditMode}
            className="flex hover:scale-105 hover:shadow-md w-48 justify-center bg-primary text-white font-bold px-3 py-2 rounded-sm mt-4 mb-4 cursor-pointer h-10"
          >
            {isEditMode ? 'Save Changes' : 'Edit Info'}
          </button>
        </section>
      </section> */}
    </section>
  )
}

export default Profile
