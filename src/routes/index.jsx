import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Category from '../views/Category'
import SortFilter from '../views/SortFilter'

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
    ],
  },

  {
    path: '/admin',
    element: 'Admin Page',
  },
])

export default router
