import React from "react";
import { FaUsers, FaBriefcase, FaCalendarAlt, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const AdminHome = () => {
  // Mock data
  const stats = [
    { title: "Total Users", value: "1,285", icon: <FaUsers />, color: "bg-blue-500" },
    { title: "Active Projects", value: "42", icon: <FaBriefcase />, color: "bg-green-500" },
    { title: "Pending Tasks", value: "153", icon: <FaCalendarAlt />, color: "bg-yellow-500" },
    { title: "System Alerts", value: "7", icon: <FaExclamationTriangle />, color: "bg-red-500" },
  ];

  const recentActivities = [
    { user: "John Doe", action: "created a new project", time: "2 hours ago", role: "Manager" },
    { user: "Jane Smith", action: "updated user permissions", time: "4 hours ago", role: "Admin" },
    { user: "Mike Johnson", action: "completed 5 tasks", time: "yesterday", role: "Employee" },
    { user: "Sarah Williams", action: "requested access to Project X", time: "yesterday", role: "Employee" },
    { user: "Robert Brown", action: "created a new team", time: "2 days ago", role: "Manager" },
  ];

  const systemStatus = [
    { service: "User Authentication", status: "Operational", icon: <FaCheckCircle className="text-green-500" /> },
    { service: "Database Servers", status: "Operational", icon: <FaCheckCircle className="text-green-500" /> },
    { service: "File Storage", status: "Operational", icon: <FaCheckCircle className="text-green-500" /> },
    { service: "Email Service", status: "Degraded", icon: <FaExclamationTriangle className="text-yellow-500" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div>
          <select className="bg-white border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last quarter</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className={`${stat.color} rounded-full p-3 text-white mr-4`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="border-b pb-3 last:border-0">
                <div className="flex justify-between">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-gray-600">{activity.action}</p>
                <span className="text-xs inline-block mt-1 px-2 py-1 rounded-full bg-gray-100">{activity.role}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 hover:underline">View All Activities</button>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            {systemStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.service}</span>
                </div>
                <span className={item.status === "Operational" ? "text-green-500" : "text-yellow-500"}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <h3 className="font-medium mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                View System Logs
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                Backup Database
              </button>
              <button className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                Run System Diagnostics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;