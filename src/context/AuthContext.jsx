import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'

export const authContext = createContext()
const { Provider } = authContext

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
  }, [user, isAuthenticated])

  //get cookie
  const getToken = () => {
    return Cookies.get('token')
  }

  //set cookie
  const setToken = () => {
    setUser(getToken())
  }
  //clear cookie
  const clearToken = () => {
    Cookies.remove('token')
    setIsAuthenticated(false)
    setUser(null)
  }

  const functions = {
    clearToken,
    user,
    isAuthenticated,
  }

  return <Provider value={functions}>{children}</Provider>
}

export default AuthContext
