
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navigation/navbar'




export default function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Outlet />
    </div>
    </>
    
  )
}

