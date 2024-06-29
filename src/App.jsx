import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from './components/core/auth/LoginForm';
import ForgotPassword from './components/core/auth/SignUp';
import ResetPassword from './components/core/auth/ResetPassword';
import MainLayout from './components/common/MainLayout';
import Category from './pages/category';
import ViewItem from './pages/viewItem';
import OrderData from './pages/orderData';
import SignUp from './components/core/auth/SignUp';
// import { ToastContainer } from 'react-toastify';
// import { userRole } from './context/context';

function App() {

  
 

  return (
    <div>

      <Routes>
      <Route
        path='/'
        element={<Navigate to="/login" />}
      />

 
          <Route element={<MainLayout />}>
            <Route path="/orders" element={<OrderData />} />
            <Route path="/add-category" element={<Category />} />
            <Route path="/view-item/:id" element={<ViewItem />} />
          </Route>
       

            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        
        

      </Routes>

    </div>
  )
}

export default App
