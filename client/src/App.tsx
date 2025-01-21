import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Construction from './pages/construction/Construction'


export default function App() {
  const {APP_STATUS} = process.env

  return (
    <>
      <Routes>
        <Route path='/' element={APP_STATUS === "development" ? <Home/> : <Construction/>} />
      </Routes>
    </>
    
  )
}

