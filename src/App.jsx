import { useEffect, useState } from 'react'
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
// import { ToastContainer } from 'react-toastify';
// import { userRole } from './context/context';

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
useEffect(() => {
  setToken(localStorage.getItem('token'))
}, [token])

  return (
    <div>


      <Routes>

        { token?
          <Route element={<MainLayout />}>
            <Route path="/manage-subscription" element={<ManageSubscription />} />
            <Route path="/add-category" element={<Category />} />
            <Route path="/view-item/:id" element={<ViewItem />} />
          </Route>
          : <>
            <Route
              path='/'
              element={<Navigate to="/login" />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </>
        }

      </Routes>

    </div>
  )
}

export default App
