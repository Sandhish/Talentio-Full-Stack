import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";

const ManagerDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} role="manager" />
            <div className="flex flex-col flex-1">
                <header className="bg-white shadow-md p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Manager Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <span>Manager</span>
                    </div>
                </header>
                <main className="p-6">
                    <p>Welcome to the Manager Dashboard!</p>
                </main>
            </div>
        </div>
    );
};

export default ManagerDashboard;