import React, { useEffect, useState } from 'react'

const OrderTable = ({userData}) => {
    const [data, setData] = useState([]);
    const getOrders = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_DOMAIN}api/bookings`, requestOptions)
            .then((response) => response.json())
            .then((result) => { console.log(result); if (result.status === true) { setData(result.data) } })
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        getOrders()
    }, []);
    
    return (
        <div>
            <table className="min-w-full table-auto shadow-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>

                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Furniture Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rent
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Start Date
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order Id
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-gray-200'>
                    {data.map((user) => (
                        <tr>
                            {/* <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{user.name}</td> */}
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.order_id}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.furniture.name}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.rent/100}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.start_date}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.address}
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                {user.order_id}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default OrderTable
