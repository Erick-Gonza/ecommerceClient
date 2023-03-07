import { useContext } from 'react'
import { isMobile } from 'react-device-detect'
import { authContext } from '../../context/authContext'
import { modalsContext } from '../../context/ModalsContext'
import { themeContext } from '../../context/ThemeContext'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'

const Header = () => {
  const { handleTheme, theme } = useContext(themeContext)
  const { isAuthenticated, clearToken, user } = useContext(authContext)
  const { isCardOpen, isSetMenuBlur } = useContext(modalsContext)

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
            />
            )}
      </header>
    </>
  )
}

export default Header
