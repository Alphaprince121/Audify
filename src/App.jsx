import React from 'react'
import { Routes, Route, BrowserRouter ,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/base/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Sidebar from './components/sidebar/Sidebar'




const App = () => {
  const location = useLocation(); // Get the current route location

  // Check if the current path is '/login' or '/signup'
  const hideSidebar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
    <Navbar/>
    {/* Conditionally render the Sidebar */}
    {!hideSidebar && (
        <div className="w-[30%] bg-black fixed h-full mt-20">
          <Sidebar />
        </div>
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
    </div>
  )
}

export default App
