import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Outlet />
    </main>
  )
}

export default Main
