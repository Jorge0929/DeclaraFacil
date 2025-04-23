import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importar router
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

//Importar paginas
import Home from './pages/home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
