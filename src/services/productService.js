export const saveProduct = async (formData, token) => {
    const response = await fetch('http://localhost:3636/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
    });
    if (response.status === 401) {
        throw new Error('Error de autenticación');
    }
    if (!response.ok) {
        throw new Error('Error al guardar el producto');
    }

    return response.json();
};
