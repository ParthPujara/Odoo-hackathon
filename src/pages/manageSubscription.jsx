import React from 'react'
import SubscribedUserTable from '../components/core/manageSubscription/SubscribedUserTable'

const ManageSubscription = () => {

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
            <SubscribedUserTable userData={temp} />
        </div>
    )
}

export default ManageSubscription
