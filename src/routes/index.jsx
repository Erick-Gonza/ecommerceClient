import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'

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
        element: 'Login Page',
      },
      {
        path: '/register',
        element: 'Register Page',
      },
      {
        path: '/admin',
        element: 'Admin Page',
      },
    ],
  },
])

export default router
