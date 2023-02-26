import { useState } from 'react'
import { useLoginUserMutation } from '../store/service/user/userService'
import Form from '../components/Form/Form'

const SignIn = () => {
  const [error, setError] = useState(false)
  const [loginUser, results] = useLoginUserMutation()
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  })

  const inputsForm = [
    {
      index: 0,
      label: 'Email or Username',
      labelClass: 'block font-bold mb-4',
      type: 'text',
      id: 'userName',
      placeholder: 'email or username...',
      className: 'border-2 w-full p-2 rounded-md placeholder-gray shadow-md',
    },
    {
      index: 1,
      label: 'Password',
      labelClass: 'block font-bold mb-4',
      type: 'text',
      id: 'password',
      placeholder: 'Password...',
      className: 'border-2 w-full p-2 rounded-md placeholder-gray shadow-md',
    },
    {
      index: 2,
      label: 'Keep me signed in',
      type: 'checkbox',
      id: 'remember',
      name: 'remember',
      className: 'ml-2 text-black',
    },
    {
      index: 3,
      label: 'Forgot my password',
      type: 'Link',
      className: 'mb-4 text-black',
      href: '#',
    },
    {
      index: 4,
      type: 'submit',
      className:
        'bg-primary text-white font-bold uppercase px-3 py-2 w-3/4 rounded-sm mt-4 mb-4 cursor-pointer shadow-md',
      value: 'SIGN IN',
    },
  ]

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    })
    console.log({ [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!userData.userName || !userData.password) {
      setError(true)
      return
    }
    setError(false)
    //TODO validate password, gensalt, hash
    //TODO login user
  }

  return (
    <section className="flex flex-col items-center justify-center h-full px-3 -mt-2 shadow-xl">
      <Form
        inputs={inputsForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </section>
  )
}

export default SignIn
