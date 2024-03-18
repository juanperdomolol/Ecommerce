import { useState } from 'react';

export const useProductForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'price' ? parseFloat(value) || '' : value;
        setFormData({ ...formData, [name]: updatedValue });
    };

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Este campo es requerido';
        tempErrors.description = formData.description ? '' : 'Este campo es requerido';
        tempErrors.price = formData.price ? '' : 'Este campo es requerido';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    return {
        formData,
        errors,
        handleInputChange,
        validateForm
    };
};
