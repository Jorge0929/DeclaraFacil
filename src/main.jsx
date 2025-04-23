import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importar router
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

//Importar paginas
import Home from './pages/home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import ForgotPassword from './pages/auth/forgot'
import Dashboard from './pages/dashboard/index.jsx'
import MainLayout from './layouts/Mainlayout.jsx'; 
import AuthLayout from './layouts/Authlayout.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Route>

      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
