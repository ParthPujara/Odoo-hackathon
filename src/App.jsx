import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from './components/core/auth/LoginForm';
import ForgotPassword from './components/core/auth/ForgotPassword';
import ResetPassword from './components/core/auth/ResetPassword';
import MainLayout from './components/common/MainLayout';
import Dashboard from './pages/dashboard';
import ManageSubscription from './pages/manageSubscription';
import Homepage from './pages/homepage';

function App() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-subscription" element={<ManageSubscription />} />
        </Route>
      </Routes >
    </div>
  )
}

export default App
