
import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { router } from './Routes/Routes.tsx'
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
