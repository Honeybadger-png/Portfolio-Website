import { useState } from 'react'
import ReactDOM  from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import  Layout  from './pages/Layout';


export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          
        </Route>
      </Routes>
    </>
  )
}

