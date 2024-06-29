import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const AddCategory = ({ categoryData }) => {
    const [previewImg, setPreviewImg] = useState()
    const { register, handleSubmit } = useForm()
    function previewImage(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }
    const addCategory = async (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");

        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("image",image.files[0]);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/category", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                if(result.status === true){
                    
                }
            })
            .catch((error) => console.error(error));
    }
    return (
        <>
            <div className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addCatgoryModal">
                Add Category
            </div>
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


            <div class="modal fade " id="addCatgoryModal" tabindex="-1" aria-labelledby="addCatgoryModalLabel" aria-hidden="true">
                <form class="modal-dialog modal-dialog-centered" onSubmit={handleSubmit(addCategory)}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addCatgoryModalLabel">Add Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Upload Image <br />
                            <input type="file" name="" id="image" accept='png' onChange={previewImage} />
                            <img src={previewImg} className='h-24' />
                            Category Name <input type="text" {...register('name')} name="name" id="name" className="border" />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory