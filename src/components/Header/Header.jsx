import React from 'react';
import '../tailwind.css';
import './Header.css';
import Logo from '../../../public/images/logopan.png';

function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-12 mr-2" />
        
      </div>

      <nav className="flex items-center space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/products" className="text-white hover:text-gray-300">Products</a>
        <a href="/company" className="text-white hover:text-gray-300">Company</a>
        <a href="/blogs" className="text-white hover:text-gray-300">Blogs</a>
        <a href="/schedule" className="text-white hover:text-gray-300">Horario</a>
      </nav>
      <div className="flex-grow" /> {/* Esto ocupará el espacio restante */}
    </header>
  );
}

export default Header;