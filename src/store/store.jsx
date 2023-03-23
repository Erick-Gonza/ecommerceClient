import { configureStore } from '@reduxjs/toolkit'
import { address } from './service/address/addressService'
import { categories } from './service/category/categoryService'
import { products } from './service/product/productService'
import { users } from './service/user/userService'
import { wishlist } from './service/wishlist/wishlistService'
import { order } from './service/order/orderService'

export const store = configureStore({
  reducer: {
    [categories.reducerPath]: categories.reducer,
    [users.reducerPath]: users.reducer,
    [products.reducerPath]: products.reducer,
    [wishlist.reducerPath]: wishlist.reducer,
    [address.reducerPath]: address.reducer,
    [order.reducerPath]: order.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categories.middleware)
      .concat(users.middleware)
      .concat(products.middleware)
      .concat(wishlist.middleware)
      .concat(address.middleware)
      .concat(order.middleware)
})
