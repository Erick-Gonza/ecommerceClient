import { useContext } from 'react'
import { isMobile } from 'react-device-detect'
import { modalsContext } from '../../context/ModalsContext'
import { themeContext } from '../../context/ThemeContext'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'

const Header = () => {
  const { handleTheme, theme } = useContext(themeContext)
  const { isCardOpen, isSetMenuBlur } = useContext(modalsContext)
  return (
    <>
      <header>
        {!isMobile ? (
          <NavbarDesktop
            isCardOpen={isCardOpen}
            handleTheme={handleTheme}
            theme={theme}
          />
        ) : (
          <NavbarMobile
            isCardOpen={isCardOpen}
            handleTheme={handleTheme}
            theme={theme}
            isSetMenuBlur={isSetMenuBlur}
          />
        )}
      </header>
    </>
  )
}

export default Header
