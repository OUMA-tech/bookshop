
import { Route, Routes } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

import Login from './components/core/Login'
import Register from './components/core/Register'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default AppRoutes