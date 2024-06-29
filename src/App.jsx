import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from './components/core/auth/LoginForm';
import ForgotPassword from './components/core/auth/SignUp';
import ResetPassword from './components/core/auth/ResetPassword';
import MainLayout from './components/common/MainLayout';
import Dashboard from './pages/dashboard';
import ManageSubscription from './pages/manageSubscription';
import Homepage from './pages/homepage';
import Nav from './components/common/Nav';
import Category from './pages/category';
import SignUp from './components/core/auth/SignUp';
import ViewItem from './pages/viewItem';
import { ToastContainer } from 'react-toastify';
import { userRole } from './context/context';

function App() {

  const [checkUser, setCheckUser] = useState("User");

  return (
    <userRole.Provider value={checkUser}>
    <div>
         
      {checkUser === "User" ?
        <>
          <Nav />
          <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes >
        </>
        :
        <Routes>
          {/* <Route path="/" element={<Navigate to=/>} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-subscription" element={<ManageSubscription />} />
            <Route path="/add-category" element={<Category />} />
            <Route path="/view-item/:id" element={<ViewItem />} />
          </Route>

        </Routes>
      }
    </div>
    </userRole.Provider>
  )
}

export default App
