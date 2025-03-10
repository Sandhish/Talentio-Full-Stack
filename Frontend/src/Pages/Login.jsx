import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/api/user/login', formData)
        .then(res =>{
            console.log(res.data);
            navigate('/home');
        })
        .catch(err =>{
            console.log(err);
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-96">
                <p className="text-3xl font-semibold text-center mb-6 text-gray-700">Login</p>
                <form className="flex flex-col space-y-4" onSubmit={submitForm}>

                    <div>
                        <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-1 mt-1 p-2 rounded-xl w-full focus:ring-2 focus:ring-black outline-none transition-all duration-400" />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
                        <input type="password" id="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="border-1 mt-1 p-2 rounded-xl w-full focus:ring-2 focus:ring-black outline-none transition-all duration-400" />
                    </div>

                    <button type="submit" className="w-32 mx-auto cursor-pointer border-2 mt-2 bg-blue-500 text-white text-[16px] font-semibold p-1.5 rounded-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"                    >
                        Login
                    </button>
                </form>
                <p className="mt-2 text-center"> Don't have an account?
                    <a href="/signup" className="text-blue-600 ml-1">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
