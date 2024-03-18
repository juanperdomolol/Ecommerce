import React from 'react';
import Button from './Button';

const ProductForm = ({ formData, errors, handleInputChange, handleSubmit, handleClose }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`} />
            {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción:</label>
            <input type="text" name="description" id="description" value={formData.description} onChange={handleInputChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.description ? 'border-red-500' : ''}`} />
            {errors.description && <p className="mt-1 text-red-500 text-xs">{errors.description}</p>}
        </div>
        <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio: $</label>
            <input type="number" name="price" id="price" value={formData.price.toString()} onChange={handleInputChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.price ? 'border-red-500' : ''}`} />
            {errors.price && <p className="mt-1 text-red-500 text-xs">{errors.price}</p>}
        </div>
        <div className="flex justify-end space-x-3">
            <Button onClick={handleClose} text="Cerrar" className="bg-gray-200 hover:bg-gray-300 text-black"  color="red"/>
            <Button type="submit" text="Guardar Producto" className="bg-blue-500 hover:bg-blue-600 text-white"  color="green"/>
        </div>
    </form>
);

export default ProductForm;
