import React, { useState } from 'react'

const AddCategory = ({ categoryData }) => {

    const [isModel, setIsModel] = useState(false)

    return (
        <>
<div className="btn btn-primary mb-3" onClick={()=>{setIsModel(!isModel)}}>
    Add
</div>
{isModel && <div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>}
        <table className="min-w-full table-auto shadow-sm">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>

                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className='bg-white divide-gray-200'>
                {categoryData.map((category) => (
                    <tr>
                        <td
                            className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                        >{category.name}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            {category.email}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            <button className='text-indigo-600 hover:text-indigo-900 px-3 py-1 rounded' >
                                Edit
                            </button>
                            <button className='text-red-600 hover:text-red-900 px-3 py-1 rounded'>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        </>
    )
}

export default AddCategory