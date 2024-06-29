import React from 'react'
import AddCategory from '../components/core/category/AddCategory'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate()
    if(localStorage.getItem("token")===null){
        navigate('/login')
        return;
    }
  return (
    <div className='px-2'>
    <AddCategory/>
    </div>
  )
}

export default Category