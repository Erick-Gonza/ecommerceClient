import { configureStore } from '@reduxjs/toolkit'
import { categories } from './service/category/categoryService'
import { products } from './service/product/productService'
import { users } from './service/user/userService'
import { wishlist } from './service/wishlist/wishlistService'

export const store = configureStore({
  reducer: {
    [categories.reducerPath]: categories.reducer,
    [users.reducerPath]: users.reducer,
    [products.reducerPath]: products.reducer,
    [wishlist.reducerPath]: wishlist.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categories.middleware)
      .concat(users.middleware)
      .concat(products.middleware)
      .concat(wishlist.middleware),
})
