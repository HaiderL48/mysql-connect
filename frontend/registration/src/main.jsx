import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register/register.jsx'
import { Login } from './pages/Login/Login.jsx'
import Layout from './Layout.jsx'

// const router = createBrowserRouter(
//   [{
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/home',
//         element:<Home />
//       },
//       {
//         path: '/register',
//         element:<Register />
//       },
//       {
//         path: '/login',
//         element:<Login />
//       }
//     ]
//   }]
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  {/* <RouterProvider router={router}/> */}
</React.StrictMode>,
)
