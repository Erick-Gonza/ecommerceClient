import { createContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

// create context
export const CartContext = createContext()

const CartProvider = ({ children }) => {
  // cart context state
  const [cart, setCart] = useState([])
  // item amount state
  const [itemAmount, setItemAmount] = useState(0)
  // total price state
  const [total, setTotal] = useState(0)

  // update total price
  useEffect(() => {
    if (cart) {
      const newTotal = cart.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
      setTotal(newTotal)
    }
  }, [cart])

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((total, item) => {
        return total + item.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // add item to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 }
    // check if the item is already in the cart
    const isInCart = cart.find((item) => {
      return item.id === id
    })
    // if the item is already in the cart, increase the amount
    if (isInCart) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  // remove item from cart
  const removeFromCart = (id) => {
    const newCart = [...cart].filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  // decrease amount of item
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  // increase amount from item
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  // clear cart
  const clearCart = () => {
    Swal.fire({
      target: 'main',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#fefefe',
      backdrop: true,
      background: '#DE76B5',
      color: '#fefefe',
      title: 'Cart has been cleaned',
      showConfirmButton: false,
      timer: 1200
    })
    setCart([])
  }

  // data to be passed to the provider
  const data = {
    cart,
    addToCart,
    removeFromCart,
    decreaseAmount,
    increaseAmount,
    clearCart,
    itemAmount,
    total,
    setTotal,
    setItemAmount
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
