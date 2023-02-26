import { useState } from 'react'
import Form from '../components/Form/Form'

const SignUp = () => {
  const [error, setError] = useState(false)
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    RoleId: 2,
    StateId: 1,
  })

  const inputsForm = [
    {
      index: 0,
      label: 'Name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'firstName',
      placeholder: 'First Name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 1,
      label: 'Last name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'lastName',
      placeholder: 'Last name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 2,
      label: 'User name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'userName',
      placeholder: 'User name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 3,
      label: 'Email',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'email',
      placeholder: 'Email...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 4,
      label: 'Password',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'password',
      placeholder: 'Password...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 5,
      type: 'submit',
      className:
        'bg-primary text-white font-bold uppercase px-3 py-2 w-3/4 rounded-sm cursor-pointer shadow-md mt-2 mb-2',
      value: 'SIGN UP',
    },
  ]

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.userName ||
      !userData.email ||
      !userData.password
    ) {
      setError(true)
      return
    }
    setError(false)
    console.log(userData)
  }

  return (
    <section className="flex flex-col items-center justify-center h-full mx-2 my-3 px-3 shadow-xl">
      <Form
        inputs={inputsForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </section>
  )
}

export default SignUp
