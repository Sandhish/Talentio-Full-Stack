import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";

const EmployeeDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} role="employee" />
            <div className="flex flex-col flex-1">
                <header className="bg-white shadow-md p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Employee Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <span>Employee</span>
                    </div>
                </header>
                <main className="p-6">
                    <p>Welcome to the Employee Dashboard!</p>
                </main>
            </div>
        </div>
    );
};

export default EmployeeDashboard;