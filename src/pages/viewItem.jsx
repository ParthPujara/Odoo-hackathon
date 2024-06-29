// It Adds, Displays Items by Category such as name, image, actions etc.

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import $ from "jquery"
import { useForm } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './../index.css';

const ViewItem = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [cityData, setCityData] = useState([])
    const { handleSubmit, register } = useForm()
    // const [previewImg, setPreviewImg] = useState([])
    const [itemName, setItemName] = useState()
    const [checkMethod, setCheckMethod] = useState("Add")

    function previewImage(e) {
        // setPreviewImg(URL.createObjectURL(e.target.files[0]));       
    }

    const addItem = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        // myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
        var formdata = new FormData();
        formdata.append("name", data.name);
        for (var x = 0; x < image.files.length; x++) {
            formdata.append('image[]', image.files[x], image.files[x].name);
        }
        formdata.append("description", data.description);
        formdata.append("status", "0");
        formdata.append("rent", data.rent);
        formdata.append("category_id", id);
        formdata.append("city_id", data.city);
        console.log(data)


        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_DOMAIN}api/furniture`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    toast.success('Item Added successully', {
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
                    document.getElementById("modalCloseBtn").click(); viewItems();


                }
            })
            .catch((error) => console.error(error));
    }
    const viewItems = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_DOMAIN}api/furniture/get/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => { console.log(result); if (result.status === true) { setData(result.data) } })
            .catch((error) => console.error(error));
    }
    const viewCity = () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_DOMAIN}api/cities`, requestOptions)
            .then((response) => response.json())
            .then((result) => { setCityData(result.data); })
            .catch((error) => console.error(error));
    }

    const deleteItem = (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${import.meta.env.VITE_API_DOMAIN}api/furniture/${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    toast.success('Item Deleted successully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    }); viewItems();
                }
            })
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        viewItems()
        viewCity();
    }, [])

    return (
        <div className='px-2'>
            <ToastContainer />
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
                            City
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
                        <tr className='border border-b-1'>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900" style={{width: "50px", height: "50px"}}
                            ><Swiper autoplay loop navigation={true} modules={[Navigation]} className="mySwiper">
                                {category.images.map((e) => (
                                    <SwiperSlide><img  src={`${import.meta.env.VITE_API_DOMAIN}` + e.image} alt="" /></SwiperSlide>
                                ))}
                                </Swiper>
                            </td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            >{category.name}</td>
                            <td
                                className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer"
                            > {category.city.name}</td>
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
                                <button className='text-red-600 hover:text-red-900 px-3 py-1 rounded' onClick={() => deleteItem(category.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div class="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                <form class="modal-dialog modal-dialog-centered" onSubmit={handleSubmit(addItem)} content='multipart/form-data'>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" style={{ fontSize: "22px" }} id="addItemModalLabel">Add Items</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id='modalCloseBtn'></button>
                        </div>
                        <div class="modal-body">
                            Upload Image <br />
                            <input type="file" id="image" className='border border-1 w-full p-2 rounded' onChange={previewImage} multiple />
                            {/* <img src={previewImg} className='h-24' /> */}
                            Item Name <input type="text" name="name" id="name" className='border border-1 w-full p-2 rounded' onChange={(e) => { setItemName(e.target.value) }} value={itemName} {...register("name")} />
                            Desciption <textarea name="description" id="description" className='border border-1 w-full p-2 rounded' rows={5} {...register("description")} ></textarea>
                            Select Location <select name='city' className='border border-1 w-full p-2 rounded' id='city' {...register("city")} >
                                <option value="Default" disabled selected>Select city</option>
                                {cityData && cityData.map((city) => (
                                    <option value={city.id} >{city.name}</option>
                                ))}
                            </select>
                            Rent Price <input type="number" name='rent' className='border border-1 w-full p-2 rounded' id='rent' {...register("rent")} />
                        </div>
                        <div class="modal-footer border-top-0 justify-center">
                            <button type="submit" class="btn btn-primary px-4">{checkMethod === "Add" ? 'Add' : "Update"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ViewItem