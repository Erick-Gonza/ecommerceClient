import { CartCard } from '../components/Cart/CartCard'
import { modalsContext } from '../context/ModalsContext'
import { useContext } from 'react'
import { HiX } from 'react-icons/hi'

const Cart = () => {
  const { openCard, isCardOpen } = useContext(modalsContext)
  

  let subtotal = 0
  const products = [
    {
      id: 1,
      name: 'Mochila',
      description: 'Lorem impsum',
      price: 23.99,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Vestido',
      description: 'Lorem impsum',
      price: 40.5,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Tenis',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
  ]

  return (
    <section
      className={`bg-white min-h-screen w-80 fixed top-0 right-0 z-50 ${
        openCard != true ? 'hidden' : 'block'
      }`}
    >
      <div className="flex-row m-3 grid grid-cols-6">
        <div className="col-span-1 z-10" onClick={isCardOpen}>
          <button>
            <HiX className="w-6 h-6 hover:scale-105" />
          </button>
        </div>
        <div className="col-span-4">
          <h2 className="text-2xl font-bold text-center">MY CART</h2>
        </div>
        <div className="col-span-1"></div>
      </div>

      <div className="border-b-2 mx-3 py-2">
        {products.map((product, index) => {
          return (
            <CartCard
              name={product.name}
              price={product.price}
              description={product.description}
              key={index}
            />
          )
        })}
      </div>

      <div className="flex flex-col m-3">
        <div className="flex flex-row justify-between my-3 font-bold">
          <p className="">SUBTOTAL</p>
          {}
          {products.forEach(({ price }) => {
            subtotal += price
          })}
          <p>{subtotal.toFixed(2)}</p>
        </div>
        <div>
          <button className="bg-black text-white font-bold p-2 w-full">
            CHECKOUT
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
