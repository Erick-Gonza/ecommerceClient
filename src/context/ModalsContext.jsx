import { useState, createContext } from 'react'

export const modalsContext = createContext()
const { Provider } = modalsContext

export const ModalsContext = ({ children }) => {
  const [openCard, setOpenCard] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [menuBlur, setMenuBlur] = useState(false)

  const isCardOpen = () => {
    setOpenCard(!openCard)
  }

  const isFilterOpen = () => {
    setOpenFilter(!openFilter)
  }

  const isSetMenuBlur = () => {
    setMenuBlur(!menuBlur)
  }

  const modals = {
    openCard,
    openFilter,
    menuBlur,
    isCardOpen,
    isFilterOpen,
    isSetMenuBlur
  }

  return <Provider value={modals}>{children}</Provider>
}

export default ModalsContext
