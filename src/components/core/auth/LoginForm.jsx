import React, { createContext, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { userRole } from '../../../context/context';

const LoginForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm()

    const [isHidden, setIsHidden] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const user = useContext(userRole)

    async function loginClick(data) {
        setIsLoading(true)

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("email", data.email);
        urlencoded.append("password", data.password);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow"
        };

        fetch("http://192.168.29.62:8000/api/signin", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.status === true) {
                    console.log("sdcsd")
                        toast.success('Successfull Login', {
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
                    localStorage.setItem('token', result.token);;
                    navigate('/add-category')
                }
                else {
                   
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
                    });
                    setIsLoading(false);
                }
            })
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
        <>
        <ToastContainer/>
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-left mb-4">Welcome!</h1>
                <p className="text-left mb-8">Please sign into your account</p>
                <form onSubmit={handleSubmit(loginClick)}>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="mb-6">
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
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${isLoading ? 'bg-gray-400 text-gray-800' : 'text-white bg-blue-950 hover:bg-blue-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="my-6 mx-2 flex justify-center items-center">
                        <Link
                            to="/sign-up"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            <div className="text-sm">Don't have an account ?</div>{" "}
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginForm
