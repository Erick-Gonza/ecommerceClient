import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Categories from '../views/Category'
import EditProfile from '../views/EditProfile'
import Home from '../views/Home'
import Profile from '../views/Profile'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Category from '../views/Category'
import SortFilter from '../views/SortFilter'
import ProductDetail from '../views/ProductDetail'

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
        path: '/editprofile',
        element: <EditProfile />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },

  {
    path: '/admin',
    element: 'Admin Page',
  },
])

export default router
