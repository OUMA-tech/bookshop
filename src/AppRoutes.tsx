
import { Route, Routes } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

import { LoginPage } from './pages/user/LoginPage'
import { RegisterPage } from './pages/user/RegisterPage'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  )
}

export default AppRoutes