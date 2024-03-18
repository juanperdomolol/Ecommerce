export const saveProduct = async (formData, token) => {
    const response = await fetch('https://backedcommerce-27eb97359955.herokuapp.com/api/products', {
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
