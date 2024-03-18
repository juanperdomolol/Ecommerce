import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()}  - Juan Valentin Perdomo Bonilla</p>
      </div>
    </footer>
  );
}

export default Footer;
