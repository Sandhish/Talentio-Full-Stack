import React, { useState } from "react";
import { FaSearch, FaFilter, FaPlus, FaExclamationTriangle, FaCheckCircle, FaClock } from "react-icons/fa";

const ProjectsOverview = () => {
  // Mock data
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: "Website Redesign", 
      status: "In Progress", 
      progress: 65, 
      lead: "John Doe", 
      team: ["John Doe", "Jane Smith", "Mike Johnson"], 
      deadline: "March 30, 2025",
      priority: "High"
    },
    { 
      id: 2, 
      name: "Mobile App Development", 
      status: "In Progress", 
      progress: 42, 
      lead: "Sarah Williams", 
      team: ["Sarah Williams", "David Wilson", "Emily Davis"], 
      deadline: "April 15, 2025",
      priority: "High"
    },
    { 
      id: 3, 
      name: "Data Migration", 
      status: "Completed", 
      progress: 100, 
      lead: "Robert Brown", 
      team: ["Robert Brown", "Mike Johnson"], 
      deadline: "March 5, 2025",
      priority: "Medium"
    },
    { 
      id: 4, 
      name: "Security Audit", 
      status: "On Hold", 
      progress: 25, 
      lead: "Jane Smith", 
      team: ["Jane Smith", "David Wilson", "Robert Brown"], 
      deadline: "March 25, 2025",
      priority: "Critical"
    },
    { 
      id: 5, 
      name: "CRM Integration", 
      status: "Not Started", 
      progress: 0, 
      lead: "Emily Davis", 
      team: ["Emily Davis", "Mike Johnson"], 
      deadline: "April 30, 2025",
      priority: "Medium"
    },
    { 
      id: 6, 
      name: "Analytics Dashboard", 
      status: "In Progress", 
      progress: 78, 
      lead: "David Wilson", 
      team: ["David Wilson", "Sarah Williams"], 
      deadline: "March 20, 2025",
      priority: "Low"
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch(status) {
      case "Completed": return <FaCheckCircle className="text-green-500" />;
      case "In Progress": return <FaClock className="text-blue-500" />;
      case "On Hold": return <FaExclamationTriangle className="text-yellow-500" />;
      case "Not Started": return <FaClock className="text-gray-500" />;
      default: return null;
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch(priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-blue-100 text-blue-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Projects Overview</h1>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2 flex items-center"
          >
            <FaFilter className="mr-2" /> Filter
          </button>
          <button
            className="bg-blue-600 text-white rounded-md px-4 py-2 flex items-center"
          >
            <FaPlus className="mr-2" /> New Project
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Statuses</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="On Hold">On Hold</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team Lead</label>
              <select
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Leads</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Robert Brown">Robert Brown</option>
                <option value="Sarah Williams">Sarah Williams</option>
                <option value="Emily Davis">Emily Davis</option>
                <option value="David Wilson">David Wilson</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityBadgeColor(project.priority)}`}>
                  {project.priority}
                </span>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <div className="w-24 text-sm text-gray-600">Status:</div>
                  <div className="flex items-center">
                    {getStatusIcon(project.status)}
                    <span className="ml-2">{project.status}</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-24 text-sm text-gray-600">Progress:</div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-2 text-sm">{project.progress}%</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-24 text-sm text-gray-600">Team Lead:</div>
                  <div>{project.lead}</div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-24 text-sm text-gray-600">Deadline:</div>
                  <div>{project.deadline}</div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Team Members:</div>
                <div className="flex -space-x-2 overflow-hidden">
                  {project.team.map((member, index) => (
                    <div 
                      key={index} 
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300 flex items-center justify-center"
                      title={member}
                    >
                      {member.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-end">
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsOverview;