import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import AdminDashboard from './Components/Admin/AdminDashboard'
import ManagerDashboard from './Components/Manager/ManagerDashboard'
import EmployeeDashboard from './Components/Employee/EmployeeDashboard'
import ProjectsOverview from './Components/Admin/ProjectsOverview'
import Analytics from './Components/Admin/Analytics'
import ManageUsers from './Components/Admin/ManageUsers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/projects" element={<ProjectsOverview />} />
        <Route path="/admin/analytics" element={<Analytics />} />

        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
