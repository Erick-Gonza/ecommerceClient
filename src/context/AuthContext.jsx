import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'

export const authContext = createContext()
const { Provider } = authContext

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(Cookies.get('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
    } else {
      setUser(null)
      setIsAuthenticated(false)
    }
  }, [user])

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
