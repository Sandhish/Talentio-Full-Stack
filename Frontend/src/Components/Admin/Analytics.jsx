import React, { useState } from "react";
import { FaChartLine, FaChartBar, FaChartPie, FaChartArea, FaCalendarAlt, FaDownload, FaUserFriends, FaBriefcase, FaTasks, FaClock } from "react-icons/fa";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("month");
  
  const performanceData = [
    { month: "Jan", users: 852, tasks: 1245, projects: 32 },
    { month: "Feb", users: 945, tasks: 1408, projects: 35 },
    { month: "Mar", users: 1040, tasks: 1567, projects: 39 },
    { month: "Apr", users: 1125, tasks: 1689, projects: 41 },
    { month: "May", users: 1235, tasks: 1845, projects: 43 },
    { month: "Jun", users: 1186, tasks: 1756, projects: 40 },
    { month: "Jul", users: 1054, tasks: 1678, projects: 38 },
    { month: "Aug", users: 1154, tasks: 1890, projects: 42 },
    { month: "Sep", users: 1268, tasks: 2145, projects: 45 },
    { month: "Oct", users: 1362, tasks: 2387, projects: 48 },
    { month: "Nov", users: 1285, tasks: 2198, projects: 46 },
    { month: "Dec", users: 1200, tasks: 2056, projects: 44 },
  ];

  const userStats = [
    { label: "Total Users", value: 1285, change: +12.5, icon: <FaUserFriends className="text-blue-500" /> },
    { label: "Active Users", value: 982, change: +8.3, icon: <FaUserFriends className="text-green-500" /> },
    { label: "New Users", value: 64, change: -2.7, icon: <FaUserFriends className="text-purple-500" /> },
  ];

  const projectStats = [
    { label: "Total Projects", value: 46, change: +4.5, icon: <FaBriefcase className="text-blue-500" /> },
    { label: "Active Projects", value: 32, change: +12.1, icon: <FaBriefcase className="text-green-500" /> },
    { label: "Completed", value: 14, change: -5.0, icon: <FaBriefcase className="text-gray-500" /> },
  ];

  const taskStats = [
    { label: "Total Tasks", value: 2198, change: +15.3, icon: <FaTasks className="text-blue-500" /> },
    { label: "Completed", value: 1567, change: +21.4, icon: <FaTasks className="text-green-500" /> },
    { label: "Overdue", value: 87, change: -8.2, icon: <FaTasks className="text-red-500" /> },
  ];

  const timeStats = [
    { label: "Avg. Time to Complete", value: "3.2 days", change: -5.7, icon: <FaClock className="text-blue-500" /> },
    { label: "On-time Rate", value: "87%", change: +2.8, icon: <FaClock className="text-green-500" /> },
    { label: "Time Logged", value: "1,256 hrs", change: +4.6, icon: <FaClock className="text-purple-500" /> },
  ];

  const graphImage = (type) => {
    // In a real app, these would be actual charts
    return (
      <div className="bg-gray-100 rounded-lg w-full h-full flex items-center justify-center py-12">
        {type === "line" && <FaChartLine className="text-gray-400 text-6xl" />}
        {type === "bar" && <FaChartBar className="text-gray-400 text-6xl" />}
        {type === "pie" && <FaChartPie className="text-gray-400 text-6xl" />}
        {type === "area" && <FaChartArea className="text-gray-400 text-6xl" />}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="quarter">Last quarter</option>
              <option value="year">This year</option>
            </select>
          </div>
          <button className="bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 flex items-center">
            <FaDownload className="mr-2" /> Export
          </button>
        </div>
      </div>

      {/* Key Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className={`flex items-center mt-2 ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <span className="text-sm font-medium">{stat.change >= 0 ? '+' : ''}{stat.change}%</span>
                  <span className="text-xs text-gray-500 ml-1">vs. previous period</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-full p-3">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">User Growth</h2>
          <div className="h-64">
            {graphImage("line")}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Task Completion</h2>
          <div className="h-64">
            {graphImage("bar")}
          </div>
        </div>
      </div>

      {/* More Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Project Stats</h2>
          <div className="space-y-4">
            {projectStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div className="flex items-center">
                  {stat.icon}
                  <span className="ml-2">{stat.label}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">{stat.value}</span>
                  <span className={`ml-2 text-xs ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-40">
            {graphImage("pie")}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Task Stats</h2>
          <div className="space-y-4">
            {taskStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div className="flex items-center">
                  {stat.icon}
                  <span className="ml-2">{stat.label}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">{stat.value}</span>
                  <span className={`ml-2 text-xs ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-40">
            {graphImage("area")}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Time Stats</h2>
          <div className="space-y-4">
            {timeStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                <div className="flex items-center">
                  {stat.icon}
                  <span className="ml-2">{stat.label}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">{stat.value}</span>
                  <span className={`ml-2 text-xs ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-40">
            {graphImage("line")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;