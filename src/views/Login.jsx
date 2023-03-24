import { useState, useContext } from 'react'
import {
  useLoginUserMutation,
  useCreateUserMutation
} from '../store/service/user/userService'
import Form from '../components/Form/Form'
import { loginInputsForm, registerInputsForm } from '../utils/formData'
import Swal from 'sweetalert2'
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [error, setError] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [loginUser, result] = useLoginUserMutation()
  const [createUser] = useCreateUserMutation()
  const [loginData, setLoginData] = useState({
    userName: '',
    password: ''
  })
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    roleId: 2,
    statusId: 1
  })
  const inputsLogin = loginInputsForm
  const inputsRegister = registerInputsForm
  const { setToken } = useContext(AuthContext)

  function refresh() {
    setTimeout(function () {
      navigate("/")
    }, 1500)
    Swal.fire({
      target: 'main',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#efefef',
      backdrop: true,
      background: '#DE76B5',
      color: '#efefef',
      title: 'User has been logged in correctly',
      showConfirmButton: false,
      timer: 3000
    })
  }

  const handleChange = (e) => {
    if (isLogin) {
      setLoginData({
        ...loginData,
        [e.target.id]: e.target.value
      })
    } else {
      setRegisterData({
        ...registerData,
        [e.target.id]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Login form
    if (isLogin) {
      if (!loginData.userName || !loginData.password) {
        setError(true)
        return
      }
      // login user
      loginUser(loginData).then((response) => {
        if (response.data?.token) {
          setToken(response.data?.token)
          refresh()
        }
      })
    }

    // Register form
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
      // register user
      createUser(registerData)
    }

    setError(false)
    if (isLogin) {
      setTimeout(() => {
        if (result?.isError === true) {
          Swal.fire({
            target: 'main',
            position: 'center',
            width: '30rem',
            heightAuto: false,
            icon: 'error',
            iconColor: 'red',
            backdrop: true,
            background: '#DE76B5',
            color: '#efefef',
            title: 'User credentials are incorrect',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }, 1000)
    }
    if (!isLogin) {
      Swal.fire({
        target: 'main',
        position: 'center',
        width: '30rem',
        heightAuto: false,
        icon: 'success',
        iconColor: 'efefef',
        backdrop: true,
        background: '#DE76B5',
        color: '#efefef',
        title: 'User has been registered correctly',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  return (
    <section className='flex flex-col items-center justify-center h-full px-3 my-3 mx-2'>
      {isLogin
        ? (
          <Form
            inputs={inputsLogin}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            setIsLogin={setIsLogin}
            isLogin={isLogin}
          />
        )
        : (
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
