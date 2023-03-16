
import { isMobile } from 'react-device-detect'
import NavbarDesktop from './Navbar/NavbarDesktop'
import NavbarMobile from './Navbar/NavbarMobile'

const Header = () => {
  return (
    <>
      <header>
        {!isMobile
          ? (
            <NavbarDesktop />
            )
          : (
            <NavbarMobile />
            )}
      </header>
    </>
  )
}

export default Header
