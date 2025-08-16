
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar'




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

