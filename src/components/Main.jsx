import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { modalsContext } from '../context/ModalsContext'

const Main = () => {
  const { menuBlur } = useContext(modalsContext)

  return (
    <main
      className={`dark:bg-black-variant bg-white-variant flex-1 flex flex-col h-auto w-full dark:text-white-variant gap-8 ${menuBlur && 'blur-md'}`}
    >
      <Outlet />
    </main>
  )
}

export default Main
