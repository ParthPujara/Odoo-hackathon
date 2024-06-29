import React from 'react'
import OrderTable from '../components/core/orders/OrderTable'
import { useNavigate } from 'react-router-dom'

const OrderData = () => {
    const navigate = useNavigate()
    if(localStorage.getItem("token")===null){
        navigate('/login')
        return;
    }
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
        <div className='overflow-x-auto px-2'>
            <OrderTable userData={temp} />
        </div>
    )
}

export default OrderData
