import { useContext, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { authContext } from '../../context/authContext'
import { modalsContext } from '../../context/ModalsContext'
import { themeContext } from '../../context/ThemeContext'
import { useValidateUserMutation } from '../../store/service/user/userService'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'

const Header = () => {
  const { handleTheme, theme } = useContext(themeContext)
  const { isAuthenticated, clearToken, user } = useContext(authContext)
  const { isCardOpen, isSetMenuBlur } = useContext(modalsContext)
  const [validateUser] = useValidateUserMutation()
  const [id, setId] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      const data = await validateUser()
      setId(data?.data?.user)
    }, 500)
  }, [])

  return (
    <>
      <header>
        {!isMobile
          ? (
            <NavbarDesktop
              isCardOpen={isCardOpen}
              handleTheme={handleTheme}
              theme={theme}
              isAuthenticated={isAuthenticated}
              clearToken={clearToken}
              user={user}
              id={id}
            />
            )
          : (
            <NavbarMobile
              isCardOpen={isCardOpen}
              handleTheme={handleTheme}
              theme={theme}
              isSetMenuBlur={isSetMenuBlur}
              isAuthenticated={isAuthenticated}
              clearToken={clearToken}
              user={user}
              id={id}
            />
            )}
      </header>
    </>
  )
}

export default Header
