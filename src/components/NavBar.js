import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../img/logo.png'

function NavBar() {
  // Estado para la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2 text-white text-lg">
                <img src={ShoppingCartIcon} alt="Carrito" className="h-6 w-6 mr-2"/>
                <span className="text-white text-lg font-semibold">Amaris Shop</span>
              </Link>
            </div>
            <div className="flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-green-300 hover:text-green-400 font-semibold transition duration-300">Home</Link>
            <Link to="/products" className="py-4 px-2 text-green-300 hover:text-green-400 font-semibold transition duration-300">Products</Link>
          </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path> // Icono para cerrar (X)
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path> // Icono de menú (hamburguesa)
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul>
          <li><Link to="/" className="block text-sm px-2 py-4 text-white bg-blue-700 hover:bg-blue-600">Home</Link></li>
          <li><Link to="/products" className="block text-sm px-2 py-4 text-white bg-blue-700 hover:bg-blue-600">Products</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
