import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'
import { useValidateUserMutation } from '../store/service/user/userService'

export const authContext = createContext()
const { Provider } = authContext

export const AuthContext = ({ children }) => {
  const [validateUser] = useValidateUserMutation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [id, setId] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    const token = getToken()
    if (token) {
      setUser(token)
      setIsAuthenticated(true)
    }

    if (!token || token === null) {
      setUser(null)
      setIsAuthenticated(false)
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

  // set cookie
  const setToken = () => {
    setUser(getToken())
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
    role
  }

  return <Provider value={functions}>{children}</Provider>
}

export default AuthContext
