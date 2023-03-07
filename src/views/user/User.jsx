import { useState } from 'react'
import Address from './Address'
import Profile from './Profile'
import Orders from './Orders'

const User = () => {
  const [screen, setScreen] = useState('profile')

  const handleScreen = (screen) => {
    setScreen(screen)
  }

  return (
    <>
      <section className="w-full flex gap-2 px-2 py-2">
        <button
          className={`w-full text-black border-b-2 ${
            screen === 'profile' ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={() => handleScreen('profile')}
        >
          <p className="w-full font-bold text-xl px-1 py-2"> Profile</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${
            screen === 'address' ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={() => handleScreen('address')}
        >
          <p className="w-full font-bold text-xl px-1 py-2">Address</p>
        </button>

        <button
          className={`w-full text-black border-b-2 ${
            screen === 'orders' ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={() => handleScreen('orders')}
        >
          <p className="w-full font-bold text-xl px-1 py-2"> Orders</p>
        </button>
      </section>

      {screen === 'profile' && <Profile />}

      {screen === 'orders' && <Orders />}

      {screen === 'address' && <Address />}
    </>
  )
}

export default User
