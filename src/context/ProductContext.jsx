import { createContext, useState, useEffect } from 'react'

// create context
export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  // products context state
  const [products, setProducts] = useState([])

  // data fetch of products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  // data to be passed to the provider
  const data = {
    products
  }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
