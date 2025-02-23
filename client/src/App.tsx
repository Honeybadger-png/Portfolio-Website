
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Construction from './pages/construction/Construction'
import About from './pages/about/About'
import Navbar from './Components/Navigation/navbar'



export default function App() {
  const {APP_STATUS} = process.env

  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route  path='/' element={APP_STATUS === "development" ? <Home/> : <Construction/>}  />
        <Route  path='/about' element= {<About/>}  />
      </Routes>
    </div>
    </>
    
  )
}

