export const loginUser = async (formData) => {
    const response = await fetch('https://backedcommerce-27eb97359955.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
    });

    if (!response.ok) {
        throw new Error('Error al iniciar sesión');
    }
    return response.json();
};

export const registerUser = async (formData) => {
    const response = await fetch('https://backedcommerce-27eb97359955.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error('Error al registrar');
    }
    return response.json();
};
