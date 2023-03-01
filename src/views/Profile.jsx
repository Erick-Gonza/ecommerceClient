import { useState } from 'react';


const dataUser = {
    name: 'testName',
    lastname: 'testLastName',
    userName: 'testUserName',
    email: 'test@test.com',
    Address: 'test address',
}

const Profile = () => {
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <section className="w-full flex flex-col items-center ">
            <section className="lg:text-left lg:w-2/6 text-2xl text-center object-center full font-bold justify-center flex flex-col flex-wrap ">
                My Account
            </section>

            <section className="lg:w-full lg:flex lg:flex-row object-right lg:items-end ">
                {isEditMode ? (
                    <section className="lg:w-3/4 lg:items-left w-full flex">
                        <section className="px-1 py-5 text-right w-1/2 flex-col ">
                            <h3>Name:</h3>
                            <h3>Lastname:</h3>
                            <h3>Username:</h3>
                            <h3>email:</h3>
                            <h3>Address:</h3>
                        </section>

                        <section className="w-1/4 px-1 py-5">
                            <input className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant" type="text" placeholder="Name" />
                            <input className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant" type="text" placeholder="Lastname" />
                            <input className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant" type="text" placeholder="Username" />
                            <input className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant" type="text" placeholder="Email" />
                            <input className="h-6 border rounded shadow-sm hover:scale-105 bg-white-variant" type="text" placeholder="Address" />
                        </section>
                    </section>
                ) : (
                    <section className="lg:w-3/4 lg:items-left w-full flex">
                        <section className="px-1 py-5 text-right w-1/2 flex-col ">
                            <h3>Name:</h3>
                            <h3>Lastname:</h3>
                            <h3>Username:</h3>
                            <h3>email:</h3>
                            <h3>Address:</h3>
                        </section>

                        <section className="px-1 w-1/2 py-5 ">
                            <h3>{dataUser?.name}</h3>
                            <h3>{dataUser?.lastname}</h3>
                            <h3>{dataUser?.userName}</h3>
                            <h3>{dataUser?.email}</h3>
                            <h3>{dataUser?.Address}</h3>
                        </section>
                    </section>
                )}
                
                <section className="lg:w-1/4 w-full items-center justify-center">
                    <button onClick={toggleEditMode} className="flex hover:scale-105 hover:shadow-md w-48 flex justify-center bg-primary text-white font-bold px-3 py-2 rounded-sm mt-4 mb-4 cursor-pointer rounded-xl h-10 ">
                            {isEditMode ? 'Save Changes' : 'Edit Info'}
                    </button>
                </section>
            </section>
        </section>
    );
};

export default Profile;
