import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Categories from '../views/Category'
import Home from '../views/Home'
import User from '../views/user/User'
import Login from '../views/Login'
import ProductDetail from '../views/ProductDetail'
import AdminProducts from '../views/admin/AdminProducts'
// import EditProduct from '../views/admin/EditProduct'
import EditCategory from '../views/admin/EditCategory'
import AddProduct from '../views/admin/AddProduct'
import OrderDetail from '../views/user/OrderDetail'
import Wishlist from '../views/Wishlist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile/:id',
        element: <User />
      },
      {
        path: '/order/:id',
        element: <OrderDetail />
      },
      {
        path: '/category/:id',
        element: <Categories />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      },
      {
        path: '/wishlist/:userId',
        element: <Wishlist />
      },
      {
        path: '/admin/product',
        element: <AdminProducts />
      },
      {
        path: '/admin/editcategory',
        element: <EditCategory />
      },
      // {
      //   path: '/admin/editproduct/:id',
      //   element: <EditProduct />
      // },
      {
        path: '/admin/addproduct/',
        element: <AddProduct />
      }
    ]
  }
])

export default router
