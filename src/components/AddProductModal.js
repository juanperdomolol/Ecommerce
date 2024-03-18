import React from 'react';
import { toast } from 'react-toastify';
import { useProductForm } from '../hooks/useProductForm';
import ProductForm from './ProductForm';
import { saveProduct } from '../services/productService';

function AddProductModal({ setIsOpen, onProductAdded }) {
    const { formData, errors, handleInputChange, validateForm } = useProductForm({
        name: '',
        description: '',
        price: '0.00',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const token = localStorage.getItem('token');
            try {
                await saveProduct(formData, token);
                toast.success('Producto guardado con éxito!');
                onProductAdded();
                setIsOpen(false);
            } catch (error) {
                console.error("Error al guardar el producto:", error);
                toast.error(error.message);
            }
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 overflow-y-auto h-full w-full backdrop-blur-sm transition-opacity ease-out duration-300" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-xl ring-1 ring-black ring-opacity-5 rounded-md bg-white">
                <button type="button" onClick={handleClose} className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Cerrar</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-center text-2xl font-bold text-gray-900">Crear Producto</h3>
                </div>
                <ProductForm
                    formData={formData}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleClose={handleClose}
                />
            </div>
        </div>
    );
}

export default AddProductModal;
