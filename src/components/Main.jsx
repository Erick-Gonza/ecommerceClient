import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { modalsContext } from '../context/ModalsContext'

const Main = () => {
  const { menuBlur } = useContext(modalsContext)

  return (
    <main className={`flex-1 flex flex-col w-full ${menuBlur && 'blur-md'}`}>
      <Outlet />
    </main>
  )
}

export default Main
