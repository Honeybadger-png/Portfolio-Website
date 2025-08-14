import './index.css'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <RouterProvider router={router}/>
)
