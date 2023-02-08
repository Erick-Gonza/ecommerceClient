import { Outlet } from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

function App() {
  return (
    <ThemeContext>
      <Outlet />
    </ThemeContext>
  )
}

export default App
