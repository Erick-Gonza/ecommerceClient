import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Categories from '../views/Category'
import Home from '../views/Home'
import Profile from '../views/Profile'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import ProductDetail from '../views/ProductDetail'
import AdminProducts from '../views/admin/AdminProducts'
import EditProduct from '../views/admin/EditProduct'

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
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
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
    ],
  },
])

export default router
