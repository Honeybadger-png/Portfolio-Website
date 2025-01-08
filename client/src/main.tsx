
import './index.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { router } from './Routes/Routes.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
