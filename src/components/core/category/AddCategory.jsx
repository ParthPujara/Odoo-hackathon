import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = ({ categoryData }) => {
    const navigate = useNavigate()
    const [catName, setCatName] = useState("")
    const [img, setImg] = useState()
    const [checkMethod, setCheckMethod] = useState("Add")
    const { register, handleSubmit } = useForm()
    const [previewImg, setPreviewImg] = useState()
    function previewImage(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }
    const [data, setData] = useState()
    const addCategory = async (data) => {
        if (checkMethod === "Update") {
            updateCategory()
        }
        else {
            const myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");

            const formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("image", image.files[0], image.files[0].name);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
            };

            fetch("http://192.168.29.62:8000/api/category", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result.status)
                    if (result.status === true) {
                        toast.success('Category Added successully', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    }
                })
                .catch((error) => {
                    toast.error('Category not added', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    }); console.error(error)
                });
        }
    }


    const getCategory = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/category", requestOptions)
            .then((response) => response.json())
            .then((result) => { console.log(result); if (result.status === true) { setData(result.data) } })
            .catch((error) => console.error(error));
    }
    const deleteCategory = (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`http://192.168.29.62:8000/api/category/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    getCategory(); toast.success('Category Deleted successully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => console.error(error));
    }
    const updateCategory = (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 5|bi3J5hBzYVg9K8Xk119P4VgP7elcwFlI9sLoVNMu7c708788");


        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("_method", "PUT");
        formdata.append("image", image.files[0], image.files[0].name);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`http://192.168.29.62:8000/api/category/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    getCategory(); toast.success('Category Updated successully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addCatgoryModal" onClick={() => setCheckMethod("Add")}>
                Add Category
            </div>
            <table className="min-w-full table-auto shadow-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Image
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            View Item
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-gray-200'>

                    {data && data.map((category) => (
                        <tr>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{category.name}</td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
                            ><img className='h-20' src={`${import.meta.env.VITE_API_DOMAIN}` + category.image} alt="" /></td>

                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                <button className='text-indigo-600 hover:text-indigo-900 px-3 py-1 rounded' data-bs-toggle="modal" data-bs-target="#addCatgoryModal" onClick={() => { setCheckMethod("Update"); setPreviewImg(`${import.meta.env.VITE_API_DOMAIN}` + category.image); setCatName(category.name) }}>
                                    Edit
                                </button>
                                <button className='text-red-600 hover:text-red-900 px-3 py-1 rounded' onClick={() => deleteCategory(category.id)}>
                                    Delete
                                </button>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 bg-warning flex items-self justify-center cursor-pointer" onClick={() => navigate(`/view-item/${category.id}`)}>
                                View Item
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>


            <div className="modal fade " id="addCatgoryModal" tabindex="-1" aria-labelledby="addCatgoryModalLabel" aria-hidden="true">
                <form className="modal-dialog modal-dialog-centered" onSubmit={handleSubmit(addCategory)}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{fontSize: "22px"}} id="addCatgoryModalLabel">Add Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Upload Image <br />
                            <input type="file" name="" id="image" accept='png' className='border border-1 w-full p-2 rounded' onChange={previewImage} />
                            <img src={previewImg} className='h-24' />
                            Category Name <input type="text" {...register('name')} name="name" id="name" placeholder='Enter Category name'  className='border border-1 w-full p-2 rounded' />
                        </div>
                        <div className="modal-footer border-top-0 justify-center">
                            <button type="submit" class="btn btn-primary px-4">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory