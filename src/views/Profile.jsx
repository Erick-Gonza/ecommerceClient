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

            <section className="flex w-full flex-col justify-center items-center md:items-end md:flex-row mt-2 relative ">
                <section className="flex md:w-1/2 gap-4 px-1 py-5">
                    <section className="flex flex-col gap-y-2 w-1/2 text-right ">
                        <h2 className="p-1">First Name</h2>
                        <h2 className="p-1">Last Name</h2>
                        <h2 className="p-1">UserName</h2>
                        <h2 className="p-1">Email</h2>
                        <h2 className="p-1">Address</h2>
                    </section>
                    {!isEditMode ? (
                        <section className='flex flex-col md:w-1/2 gap-y-2'>
                            <h2 className="p-1">{dataUser?.name}</h2>
                            <h2 className="p-1">{dataUser?.lastName}</h2>
                            <h2 className="p-1">{dataUser?.userName}</h2>
                            <h2 className="p-1">{dataUser?.email}</h2>
                            <h2 className="p-1">{dataUser?.address}</h2>
                        </section>
                    ) : (
                        <form className="flex flex-col gap-2 md:w-1/2  w-1/2 px-5">
                            <input className="md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant" type="text" placeholder="Name"/>
                            <input className="md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant" type="text" placeholder="Lastname"/>
                            <input className="md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant" type="text" placeholder="Username"/>
                            <input className="md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant" type="text" placeholder="Email" />
                            <input className="md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant" type="text" placeholder="Address"/>
                        </form>
                    )}
                </section>
                <button
                onClick={toggleEditMode}
                className="flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10"
                >
                    {isEditMode ? 'Save' : 'Edit Info'}
                </button>
            </section>
        </section>
    )
}

export default Profile
