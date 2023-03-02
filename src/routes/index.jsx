import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Categories from '../views/Category'
import Home from '../views/Home'
import Profile from '../views/Profile'
import Login from '../views/Login'
import ProductDetail from '../views/ProductDetail'
import AdminProducts from '../views/admin/AdminProducts'
import EditProduct from '../views/admin/EditProduct'
import Address from '../views/Address'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/admin/product',
        element: <EditProduct />,
      },
      {
        path: '/address',
        element: <Address />,
      },
    ],
  },
])

export default router
