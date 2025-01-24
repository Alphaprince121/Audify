import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/base/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
    </div>
  )
}

export default App
