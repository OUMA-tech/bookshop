
import { Route, Routes } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

import { LoginPage } from './pages/common/LoginPage'
import { RegisterPage } from './pages/common/RegisterPage'
import { AdminBookListPage } from './pages/admin/books/BookListPage'
import { AdminRoute } from './routes/AdminRoutes'
import { BookListPage } from './pages/user/books/BookListPage'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route
        path="/admin/books"
        element={
          <AdminRoute>
            <AdminBookListPage />
          </AdminRoute>
        }
      />
       <Route path="/books" element={<BookListPage />}/>
    </Routes>
  )
}

export default AppRoutes