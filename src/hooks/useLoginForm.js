import { useState } from 'react';

export const useLoginForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (isLogin) => {
        let tempErrors = {};
        if (isLogin) {
            tempErrors.email = formData.email ? '' : 'Este campo es requerido';
            tempErrors.password = formData.password ? '' : 'Este campo es requerido';
        } else {
            tempErrors.email = formData.email ? '' : 'Este campo es requerido';
            tempErrors.username = formData.username ? '' : 'Este campo es requerido';
            tempErrors.password = formData.password ? '' : 'Este campo es requerido';
        }
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    return {
        formData,
        setFormData,
        errors,
        handleInputChange,
        validateForm,
        isRegistrationSuccess,
        setIsRegistrationSuccess,
    };
};
