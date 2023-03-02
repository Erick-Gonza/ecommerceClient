import { useState } from 'react'
import {
  useLoginUserMutation,
  useCreateUserMutation,
} from '../store/service/user/userService'
import Form from '../components/Form/Form'
import { loginInputsFrom, registerInputsForm } from '../utils/formData'

const SignIn = () => {
  const [error, setError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [loginUser] = useLoginUserMutation()
  const [createUser] = useCreateUserMutation()
  const [loginData, setLoginData] = useState({
    userName: '',
    password: '',
  })
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    RoleId: 2,
    StateId: 1,
  })
  const inputsLogin = loginInputsFrom
  const inputsRegister = registerInputsForm

  const handleChange = (e) => {
    if (isLogin) {
      setLoginData({
        ...loginData,
        [e.target.id]: e.target.value,
      })
      console.log({ [e.target.id]: e.target.value })
      return
    } else {
      setRegisterData({
        ...registerData,
        [e.target.id]: e.target.value,
      })
      console.log({ [e.target.id]: e.target.value })
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validate login or register form
    if (isLogin) {
      if (!loginData.userName || !loginData.password) {
        setError(true)
        return
      }
    }

    if (!isLogin) {
      if (
        !registerData.firstName ||
        !registerData.lastName ||
        !registerData.userName ||
        !registerData.email ||
        !registerData.password
      ) {
        setError(true)
        return
      }
    }

    setError(false)

    isLogin ? console.log(loginData) : console.log(registerData)
    //TODO validate password, gensalt, hash
    //TODO login user
  }

  return (
    <section className="flex flex-col items-center justify-center h-full px-3 my-3 mx-2">
      {isLogin ? (
        <Form
          inputs={inputsLogin}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      ) : (
        <Form
          inputs={inputsRegister}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error={error}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      )}
    </section>
  )
}

export default SignIn
