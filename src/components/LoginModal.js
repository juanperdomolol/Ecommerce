import React, { useState } from 'react';
import { useLoginForm } from '../hooks/useLoginForm';
import LoginForm from './LoginForm';
import { loginUser, registerUser } from '../services/authService';
import { toast } from 'react-toastify';

function LoginModal({ setIsOpen, Login  }) {
    const [isLogin, setIsLogin] = useState(Login);
    const { formData, setFormData, errors, handleInputChange, validateForm } = useLoginForm({
        username: '',
        password: '',
        email: ''
    });

    const handleClose = () => setIsOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm(isLogin)) return;

        try {
            const data = isLogin ? await loginUser(formData) : await registerUser(formData);
            toast.success(isLogin ? 'Inicio de sesión exitoso' : 'Registro exitoso');
            if (!isLogin) {
                setIsLogin(true);
            } else {
                localStorage.setItem('token', data.token);
                setIsOpen(false);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ username: '', password: '', email: '' });
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full backdrop-blur-sm transition-opacity ease-out">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <LoginForm
                    isLogin={isLogin}
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    onClose={handleClose}
                />
                <button onClick={toggleForm} color="green"className="text-blue-500 hover:text-blue-700">
                    {isLogin ? "¿Necesitas una cuenta?" : "¿Ya tienes cuenta?"}
                </button>
            </div>
        </div>
    );
}

export default LoginModal;
