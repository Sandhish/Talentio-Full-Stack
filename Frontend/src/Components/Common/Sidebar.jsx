import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaCog, FaUsers, FaClipboardList, FaBriefcase, FaSignOutAlt, FaChartLine, FaCalendarAlt, FaFileAlt, FaBell, FaQuestionCircle } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, toggleSidebar, role }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const logout = () => {
        navigate("/");
    };

    const menuItems = {
        admin: [
            { icon: <FaHome />, label: "Dashboard", path: "/admin" },
            { icon: <FaUsers />, label: "Manage Users", path: "/admin/users" },
            { icon: <FaBriefcase />, label: "Projects Overview", path: "/admin/projects" },
            { icon: <FaChartLine />, label: "Analytics", path: "/admin/analytics" },
            { icon: <FaFileAlt />, label: "Reports", path: "/admin/reports" },
            { icon: <FaCog />, label: "Settings", path: "/admin/settings" },
        ],
        manager: [
            { icon: <FaHome />, label: "Dashboard", path: "/manager" },
            { icon: <FaBriefcase />, label: "Projects", path: "/manager/projects" },
            { icon: <FaUsers />, label: "Team", path: "/manager/team" },
            { icon: <FaCalendarAlt />, label: "Schedule", path: "/manager/schedule" },
            { icon: <FaFileAlt />, label: "Reports", path: "/manager/reports" },
            { icon: <FaUser />, label: "Profile", path: "/manager/profile" },
        ],
        employee: [
            { icon: <FaHome />, label: "Dashboard", path: "/employee" },
            { icon: <FaClipboardList />, label: "Tasks", path: "/employee/tasks" },
            { icon: <FaBriefcase />, label: "Projects", path: "/employee/projects" },
            { icon: <FaCalendarAlt />, label: "Schedule", path: "/employee/schedule" },
            { icon: <FaUser />, label: "Profile", path: "/employee/profile" },
        ],
    };

    return (
        <aside
            className={`bg-blue-900 text-white flex flex-col transition-all duration-300 h-full ${isSidebarOpen ? "w-64" : "w-20"
                }`}
        >
            <div className="p-5 border-b border-blue-800 flex items-center justify-between">
                <span className={`font-bold text-xl ${isSidebarOpen ? "block" : "hidden"}`}>WorkPortal</span>
                <button
                    onClick={toggleSidebar}
                    className="cursor-pointer text-white focus:outline-none"
                >
                    <FaBars size={20} />
                </button>
            </div>

            <div className={`px-4 py-6 border-b border-blue-800 ${isSidebarOpen ? "flex items-center" : "flex justify-center"}`}>
                <div className="bg-blue-700 rounded-full h-10 w-10 flex items-center justify-center text-white font-semibold">
                    {role.charAt(0).toUpperCase()}
                </div>
                <div className={`ml-3 ${isSidebarOpen ? "block" : "hidden"}`}>
                    <p className="font-medium capitalize">{role}</p>
                    <p className="text-xs text-blue-300">Online</p>
                </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <ul>
                    {menuItems[role].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            className="px-5 py-3 flex items-center gap-3 cursor-pointer hover:bg-blue-800 transition-colors"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className={`transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 w-0 h-0 overflow-hidden"}`}>
                                {item.label}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-5 border-t border-blue-800">
                <div className={`flex mb-4 items-center ${isSidebarOpen ? "" : "justify-center"}`}>
                    <FaBell className="text-xl cursor-pointer hover:text-blue-300" />
                    {isSidebarOpen && <span className="ml-3">Notifications</span>}
                </div>
                <div className={`flex mb-4 items-center ${isSidebarOpen ? "" : "justify-center"}`}>
                    <FaQuestionCircle className="text-xl cursor-pointer hover:text-blue-300" />
                    {isSidebarOpen && <span className="ml-3">Help</span>}
                </div>
                <button
                    onClick={logout}
                    className={`flex items-center text-red-300 hover:text-red-500 ${isSidebarOpen ? "" : "justify-center"}`}
                >
                    <FaSignOutAlt className="text-xl" />
                    {isSidebarOpen && <span className="ml-3">Logout</span>}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;