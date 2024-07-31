import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './utils/Login.jsx'
import Browser from './utils/browser.jsx'
import { store } from '../store/store.js'
import { Provider } from 'react-redux'
const router=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/", element:<Login/>,
    },
    { path:"/browser", element:<Browser/>}
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
<React.StrictMode>
     <Provider store={store}>
    <RouterProvider router={router}/>
     </Provider>
  </React.StrictMode>

  
)
