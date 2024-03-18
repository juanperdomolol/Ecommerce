import React, { useState, useEffect } from 'react';
import Button from './../components/Button'; 
import LoginModal from './../components/LoginModal'; 
import { jwtDecode } from 'jwt-decode';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
        const decodedToken = jwtDecode(token); // Decodifica el token
        setUserName(decodedToken.email);
    } else {
        setIsLoggedIn(false);
        setUserName(null);
    }
  }, []); // Este efecto se ejecuta solo al montar el componente
  const handleLoginButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleRegisterButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleLogoutButtonClick = () => {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    setIsLoggedIn(false);
    setUserName(null);
  };

  return (
    <div className="p-8">
    <h1 className="text-center text-2xl font-bold mb-4">Bienvenido a nuestra tienda</h1>
    <p className="mb-4">
      Explora nuestra selección de productos y encuentra lo que necesitas.
      ¿Quieres añadir tus propios productos a la tienda?
      {isLoggedIn ? (
        <div className="flex justify-between items-center">
          <p>Bienvenido, <span className="text-blue-600 font-bold">{userName}</span>!</p>
          <Button onClick={handleLogoutButtonClick} text="Cerrar Sesión" color="red"/>
        </div>
      ) : (
        <>Inicia sesión para empezar.</>
      )}
    </p>
    {!isLoggedIn && (
      <div className="flex gap-4">
        <Button onClick={handleLoginButtonClick} text="Iniciar Sesión" color="green"/>
        <Button onClick={handleRegisterButtonClick} text="Registrarse" color="blue"/>
      </div>
    )}
    {isModalOpen && <LoginModal Login={!isLoggedIn} setIsOpen={setIsModalOpen} />}
  </div>
  
  );
}

export default Home;
