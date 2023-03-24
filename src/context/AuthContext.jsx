import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'
import { useValidateUserMutation } from '../store/service/user/userService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [validateUser] = useValidateUserMutation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [id, setId] = useState(null)
  const [role, setRole] = useState(null)
  const [currentView, setcurrentView] = useState('home')

  useEffect(() => {
    const token = getToken()
    if (token) {
      setUser(token)
      setIsAuthenticated(true)
    }

    if (!token || token === null) {
      setUser(null)
      setIsAuthenticated(false)
      setId(null)
      setRole(null)
    }

    setTimeout(async () => {
      const data = await validateUser()
      setId(data?.data?.user)
      setRole(data?.data?.role)
    }, 500)
  }, [user, isAuthenticated])

  // get cookie
  const getToken = () => {
    return Cookies.get('token')
  }
  const changeCurrent = (current) => {
    setcurrentView(current)
  }

  // set cookie
  const setToken = (token) => {
    setUser(token)
  }

  // clear cookie
  const clearToken = () => {
    Cookies.remove('token')
    setIsAuthenticated(false)
    setUser(null)
  }

  const functions = {
    clearToken,
    setToken,
    user,
    isAuthenticated,
    id,
    role,
    changeCurrent,
    currentView
  }

  return <AuthContext.Provider value={functions}>{children}</AuthContext.Provider>
}

export default AuthProvider
