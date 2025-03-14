import React, { useState } from "react";
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEllipsisV, FaUserShield, FaUser, FaBriefcase } from "react-icons/fa";

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", lastLogin: "2 hours ago" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager", status: "Active", lastLogin: "5 hours ago" },
        { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Employee", status: "Active", lastLogin: "1 day ago" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "Employee", status: "Inactive", lastLogin: "2 days ago" },
        { id: 5, name: "Robert Brown", email: "robert@example.com", role: "Manager", status: "Active", lastLogin: "3 hours ago" },
        { id: 6, name: "Emily Davis", email: "emily@example.com", role: "Employee", status: "Active", lastLogin: "6 hours ago" },
        { id: 7, name: "David Wilson", email: "david@example.com", role: "Employee", status: "Inactive", lastLogin: "1 week ago" },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "Employee", status: "Active" });
    const [selectedUser, setSelectedUser] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddUser = () => {
        setUsers([...users, { ...newUser, id: users.length + 1, lastLogin: "Never" }]);
        setNewUser({ name: "", email: "", role: "Employee", status: "Active" });
        setShowAddUserModal(false);
    };

    const handleDeleteUser = () => {
        setUsers(users.filter(user => user.id !== selectedUser.id));
        setShowDeleteModal(false);
    };

    const getRoleIcon = (role) => {
        switch (role) {
            case "Admin": return <FaUserShield className="text-red-500" />;
            case "Manager": return <FaBriefcase className="text-blue-500" />;
            case "Employee": return <FaUser className="text-green-500" />;
            default: return <FaUser className="text-gray-500" />;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
                <div className="mt-4 md:mt-0 flex items-center space-x-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <button
                        onClick={() => setShowAddUserModal(true)}
                        className="bg-blue-600 text-white rounded-md px-4 py-2 flex items-center"
                    >
                        <FaPlus className="mr-2" /> Add User
                    </button>
                </div>
            </div>

            {/* User Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Login
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            {getRoleIcon(user.role)}
                                            <span className="ml-2">{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.lastLogin}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-3">
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="text-red-600 hover:text-red-900"
                                                onClick={() => {
                                                    setSelectedUser(user);
                                                    setShowDeleteModal(true);
                                                }}
                                            >
                                                <FaTrash />
                                            </button>
                                            <div className="relative">
                                                <button className="text-gray-500 hover:text-gray-700">
                                                    <FaEllipsisV />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> users
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Add User Modal */}
            {showAddUserModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Employee">Employee</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    value={newUser.status}
                                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                onClick={() => setShowAddUserModal(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddUser}
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                            >
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedUser && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Delete User</h2>
                        <p className="mb-4">Are you sure you want to delete {selectedUser.name}? This action cannot be undone.</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteUser}
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ManageUsers;