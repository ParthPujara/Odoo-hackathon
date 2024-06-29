// It register user with mail varification

import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const navigate = useNavigate();

    const [isHidden, setIsHidden] = useState(true)
    const { register, handleSubmit } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const RegiseterClick = (data) => {
        setIsLoading(true)

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", data.name);
        urlencoded.append("email", data.email);
        urlencoded.append("mobile_number", data.contact);
        urlencoded.append("password", data.password);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/signup", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    localStorage.setItem('token', result.token);
                    toast.success('Signed In successfully', {
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
                    navigate('/dashboard')
                }
            }
            )
            .catch((error) => {
                toast.error('Invalid credentials', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                }); setIsLoading(false); console.error(error)
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-5">
                <h1 className="text-2xl font-bold text-left mb-4">Sign Up</h1>
                <p className="text-left mb-4">
                    Enter details to create your account
                </p>
                <form onSubmit={handleSubmit(RegiseterClick)}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contact"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Contact
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            {...register('contact')}
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter your Contact"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="Email"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register('email')}
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <div className="border rounded-lg w-full p-3 text-sm flex justify-between">
                            <input
                                type={isHidden ? 'password' : 'text'}
                                id="password"
                                {...register("password", { required: 'This field is required' })}
                                className={`outline-none ${isHidden ? '' : 'border-none focus:border-none'}`}
                                placeholder="Enter password"
                                required
                            />
                            {
                                <div onClick={() => setIsHidden(!isHidden)}>
                                    {isHidden ? <UilEye color="#6c6c6c" /> : <UilEyeSlash color="#6c6c6c" />}
                                </div>
                            }
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="my-6 mx-2 flex justify-center items-center">
                            <Link
                                to="/login"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                <div className="text-sm">Back to Login</div>{" "}
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
