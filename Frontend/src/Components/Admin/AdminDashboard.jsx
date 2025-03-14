import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import { FaBell, FaEnvelope, FaSearch, FaUser } from "react-icons/fa";

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                role="admin"
            />

            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="bg-white shadow-sm z-10">
                    <div className="px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <h2 className="text-2xl font-semibold text-gray-800">Admin Portal</h2>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                />
                                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                                    <FaBell className="text-gray-600 text-xl" />
                                    <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">3</span>
                                </button>

                                <button className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none">
                                    <FaEnvelope className="text-gray-600 text-xl" />
                                    <span className="absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">5</span>
                                </button>

                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <div className="bg-blue-700 rounded-full h-10 w-10 flex items-center justify-center text-white font-semibold">A</div>
                                    <span className="font-medium text-gray-700">Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default AdminDashboard;