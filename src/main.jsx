import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './index.css'
import GlobalContext from './utils/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </Provider>
)
