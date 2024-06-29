import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-left mb-4">Forgot Password?</h1>
                <p className="text-left mb-4">
                    Enter your account email address below. we&apos;ll share a reset link.
                </p>

                <div className="mb-5">
                    <label
                        htmlFor="Email"
                        className="block mb-2 text-sm font-medium text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border rounded-lg w-full p-3 text-sm"
                        placeholder="Enter your Email"
                        //   value={email}
                        //   onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Link to="/reset-password">
                        <button
                            type="submit"
                            className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className="text-center mt-5">
                    <button
                        //   onClick={switchAuth}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Back to login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
