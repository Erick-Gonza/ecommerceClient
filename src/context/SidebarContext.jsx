import { createContext, useState } from 'react'

// create context
export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  // sidebar context state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // data to be passed to the provider
  const data = { isSidebarOpen, toggleSidebar }

  return (
    <SidebarContext.Provider value={data}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
