import React from 'react'
import AddCategory from '../components/core/category/AddCategory'

const Category = () => {
    const temp = [
        {
            name: "A",
            email: "abc@gmail.com"
        },
        {
            name: "P",
            email: "pqr@gmail.com"
        },

    ]
  return (
    <div className='px-2'>
    <AddCategory categoryData={temp}/>
    </div>
  )
}

export default Category