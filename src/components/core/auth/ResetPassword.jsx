import React from 'react'

const ResetPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-left mb-4">Reset Password</h1>
                <p className="text-left mb-8">Please enter and confirm new password.</p>
                <form>
                    <div className="mb-5">
                        <label
                            htmlFor="newPassword"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            New Password
                        </label>
                        <input
                            type="text"
                            id="newPassword"
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Enter new password"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="confirmPassword"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            id="confirmPassword"
                            className="border rounded-lg w-full p-3 text-sm"
                            placeholder="Confirm new password"

                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
