import React from 'react'
import AuthContext from '../context/authContext'
import CartContext from '../context/CartContext'
import ModalsContext from '../context/ModalsContext'
import ProductContext from '../context/ProductContext'
import SidebarContext from '../context/SidebarContext'
import ThemeContext from '../context/ThemeContext'

const GlobalContext = ({ children }) => {
  return (
    <AuthContext>
      <CartContext>
        <ModalsContext>
          <ProductContext>
            <SidebarContext>
              <ThemeContext>
                {children}
              </ThemeContext>
            </SidebarContext>
          </ProductContext>
        </ModalsContext>
      </CartContext>
    </AuthContext>
  )
}

export default GlobalContext
