import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loginStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        setIsLoggedIn(false);
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="bg-black px-3 md:px-6 py-4 shadow-lg fixed w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="h-9 md:h-12" />
                    </NavLink>
                </div>

                {/* Center Section: Home Icon + Search Bar */}
                <div className="flex items-center space-x-2 flex-1 justify-center">
                    {/* Home Icon */}
                    <button
                        onClick={() => navigate('/')}
                        className="hidden md:block text-white hover:text-red-500 transition p-2 rounded-full bg-[#1a1a1f]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </button>

                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-[250px] md:max-w-md">
                        <input
                            type="text"
                            placeholder="What do you want to play?"
                            className="w-full px-4 py-2 pl-10 bg-[#1a1a1f] text-white rounded-full border border-gray-600 focus:border-red-500 focus:outline-none"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Right Section: Login */}
                <div className="flex items-center space-x-4">
                    {!isLoggedIn ? (
                        <button
                            onClick={() => navigate('/login')}
                            className="text-white bg-red-600 px-2  md:px-4 py-2 rounded-full  font-medium transition"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="text-white px-4 py-2 rounded-full bg-red-600 font-medium transition"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
