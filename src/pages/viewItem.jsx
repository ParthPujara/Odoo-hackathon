import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import $ from "jquery"
import { useForm } from 'react-hook-form';

const ViewItem = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const { handleSubmit, register } = useForm()
    // const [previewImg, setPreviewImg] = useState([])
    const [itemName, setItemName] = useState()
    const [checkMethod, setCheckMethod] = useState("Add")
    var previewImg = []
    function previewImage(e) {
        // setPreviewImg(URL.createObjectURL(e.target.files[0]));       
    }

    const addItem = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        // myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
        myHeaders.append("Authorization", `Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788`)
        var formdata = new FormData();
        formdata.append("name", data.name);
        for (var x = 0; x < image.files.length; x++) {
            formdata.append('image[]', image.files[x], image.files[x].name);
        }
        formdata.append("description", data.description);
        formdata.append("status", "0");
        formdata.append("rent", data.rent);

        console.log(formdata);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/furniture", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }
    const viewItems = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/furniture", requestOptions)
            .then((response) => response.json())
            .then((result) => { console.log(result); if (result.status === true) { setData(result.data) } })
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        viewItems()


    }, [])

    return (
        <div className='px-2'>
            <div className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addItemModal" onClick={() => setCheckMethod("Add")}>
                Add Item
            </div>
            <table className="min-w-full table-auto shadow-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Image
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descrition
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rent
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-gray-200'>

                    {data && data.map((category) => (
                        <tr>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
                            >
                                {category.images.map((e) => (
                                    <img className='h-20' src={`${import.meta.env.VITE_API_DOMAIN}` + e.image} alt="" />
                                ))}
                            </td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{category.name}</td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{category.description}</td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{category.rent}</td>

                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                <button className='text-indigo-600 hover:text-indigo-900 px-3 py-1 rounded' data-bs-toggle="modal" data-bs-target="#addItemModal" onClick={() => { setCheckMethod("Update"); setPreviewImg(`${import.meta.env.VITE_API_DOMAIN}` + category.image); setCatName(category.name) }}>
                                    Edit
                                </button>
                                <button className='text-red-600 hover:text-red-900 px-3 py-1 rounded' onClick={() => deleteCategory(category.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div class="modal fade " id="addItemModal" tabindex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                <form class="modal-dialog modal-dialog-centered" onSubmit={handleSubmit(addItem)} content='multipart/form-data'>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addItemModalLabel">Add Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Upload Image <br />
                            <input type="file" id="image" onChange={previewImage} multiple />
                            {/* <img src={previewImg} className='h-24' /> */}
                            Item Name <input type="text" name="name" id="name" className="border" onChange={(e) => { setItemName(e.target.value) }} value={itemName} {...register("name")} />
                            Desciption <textarea name="description" id="description" rows={5} {...register("description")} ></textarea>
                            Rent Price <input type="number" name='rent' id='rent' {...register("rent")} />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">{checkMethod === "Add" ? 'Add' : "Update"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ViewItem