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
import Order from '../views/Order'
import EditCategory from '../views/admin/EditCategory'
import AddProduct from '../views/admin/AddProduct'

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
        path: '/order',
        element: <Order />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/admin/product',
        element: <AdminProducts />,
      },
      {
        path: '/admin/editcategory',
        element: <EditCategory />,
      },
      {
        path: '/admin/editproduct/:id',
        element: <EditProduct />,
      },
      {
        path: '/admin/addproduct/',
        element: <AddProduct />,
      },
      {
        path: '/address',
        element: <Address />,
      },
    ],
  },
])

export default router
