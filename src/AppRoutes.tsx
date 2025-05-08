
import { Route, Routes } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

import Signin from './components/core/Signin'
import Signup from './components/core/Signup'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}

export default AppRoutes