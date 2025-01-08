import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navigation/navbar'


export default function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

