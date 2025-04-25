import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importar router
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'

//Importar paginas
import Home from './pages/home/index.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import ResetPassword from './pages/auth/ResetPassword'
import ForgotPassword from './pages/auth/forgot.jsx'
import Dashboard from './pages/dashboard/index.jsx'
import MainLayout from './layouts/Mainlayout.jsx'; 
import AuthLayout from './layouts/Authlayout.jsx';
import DianGuide from './pages/dian/DianGuide.jsx';
import ChatPage from './pages/support/ChatPage.jsx';
import Plans from './pages/plans/Plans.jsx';
import Settings from './pages/settings/Settings.jsx';
import Faq from './pages/support/Faq.jsx';
import Terms from './pages/support/Terms.jsx';
import SecurityPolicy from './pages/legal/SecurityPolicy.jsx';
import DeclarationWizard from './pages/declaration/DeclarationWizard.jsx'
import Step1_PersonalData from './pages/declaration/Step1_PersonalData.jsx';
import Step2_Income from './pages/declaration/Step2_Income.jsx';
import Step3_Deductions from './pages/declaration/Step3_Deductions.jsx';
import DeclarationSummary from './pages/declaration/DeclarationSummary.jsx';
import DeclarationInstructions from './pages/declaration/DeclarationInstructions.jsx';
import History from './pages/history/History.jsx';

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
          <Route path="/dian-guide" element={<DianGuide />} />
          <Route path="/history" element={<History />} />
          <Route path="/support" element={<ChatPage />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<SecurityPolicy />} />
          
          <Route path="/declaration" element={<DeclarationWizard />}>
            <Route index element={<Step1_PersonalData />} />
            <Route path="personal-data" element={<Step1_PersonalData />} />
            <Route path="income" element={<Step2_Income />} />
            <Route path="deductions" element={<Step3_Deductions />} />
            <Route path="summary" element={<DeclarationSummary />} />
            <Route path="instructions" element={<DeclarationInstructions />} />
            <Route path="history" element={<History />} />
            
          </Route>
        </Route>

      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
