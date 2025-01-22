import React from 'react';
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className="p-2">
            <div className="bg-[#141417] p-2 pb-7 rounded-lg shadow-lg space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between p-4">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3">
                        <MdOutlineLibraryMusic className="text-white text-3xl" />
                        <h1 className="text-white text-xl font-semibold">Your Library</h1>
                    </div>
                    {/* Add Icon */}
                    <IoMdAdd className="text-white text-2xl cursor-pointer hover:text-red-500 transition-colors" />
                </div>

                {/* Create Playlist Section */}
                <div className="text-white space-y-2 bg-[#252424] p-4 rounded-md">
                    <h2 className="text-lg font-medium">Create your first playlist</h2>
                    <p className="text-white text-sm">
                        It's easy, and we'll help you get started.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                        Create Playlist
                    </button>
                </div>

                {/* Find Singers Section */}
                <div className="text-white space-y-2 bg-[#252424] p-4 rounded-md">
                    <h2 className="text-lg font-medium">Let's find some singers to follow</h2>
                    <p className="text-white text-sm">
                        We'll keep you updated with the latest hits.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="bg-[#252424] p-4 rounded-md">
                    <div className="gap-4 text-sm flex flex-wrap items-start">
                        <button className="text-white hover:text-white transition-all duration-200">Legal</button>
                        <button className="text-white hover:text-white transition-all duration-200">Terms & Conditions</button>
                        <button className="text-white hover:text-white transition-all duration-200">Privacy Policy</button>
                        <button className="text-white hover:text-white transition-all duration-200">Cookies</button>
                        <button className="text-white hover:text-white transition-all duration-200">Accessibility</button>
                        <button className="text-white hover:text-white transition-all duration-200">Safety</button>
                    </div>
                </div>

                {/* Language Section */}
                <div className="bg-[#252424] p-4 rounded-md">
                    <div className="gap-3 text-sm flex flex-wrap items-start">
                        <button className="text-white hover:text-white transition-all duration-200 border py-2 px-4 rounded-full">English</button>
                        <button className="text-white hover:text-white transition-all duration-200  border py-2 px-4 rounded-full">Hindi</button>
                        <button className="text-white hover:text-white transition-all duration-200  border py-2 px-4 rounded-full">Punjabi</button>
                        <button className="text-white hover:text-white transition-all duration-200  border py-2 px-4 rounded-full">Pahari</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
