"use client";
import React, { useState } from 'react';

const LoginPage = () => {
    const [showRegister, setShowRegister] = useState(false);

    const toggleForm = () => {
        setShowRegister(!showRegister);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Welcome to Something
                </h1>
                {showRegister ? (
                    <form>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors duration-300"
                        >
                            Register
                        </button>
                    </form>
                ) : (
                    <form>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors duration-300"
                        >
                            Login
                        </button>
                    </form>
                )}
                <div className="text-center mt-4">
                    <span className="text-gray-400">
                        {showRegister ? "Already have an account?" : "Don't have an account?"}
                    </span>
                    <button
                        onClick={toggleForm}
                        className="text-teal-500 hover:underline ml-2"
                    >
                        {showRegister ? "Login" : "Register"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;