import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Button from './../components/Button';
import AddProductModal from './../components/AddProductModal';

function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [refreshProducts, setRefreshProducts] = useState(false);
    const [userName, setUserName] = useState('');

    const fetchProducts = async () => {
      const token = localStorage.getItem('token'); 
      try {
        const response = await fetch('http://localhost:3636/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('No se pudo obtener los productos');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    useEffect(() => {
        fetchProducts();
        setRefreshProducts(false);

        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken)
            setUserName(decodedToken.email);
        }
    }, [refreshProducts]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const triggerProductRefresh = () => {
        setRefreshProducts(prev => !prev);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Productos</h1>
                {userName && <p>Bienvenido, {userName}!</p>} 
                <Button onClick={handleOpenModal} text="Agregar Producto" color="blue"/>
            </div>
            {isModalOpen && <AddProductModal setIsOpen={setIsModalOpen} onProductAdded={triggerProductRefresh} />}
            {products.length === 0 ? (
                <p>Necesitas iniciar sesión para ver los productos.</p>
                // <img src={ShoppingCartIcon} alt="Carrito" className="h-6 w-6 mr-2"/>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
