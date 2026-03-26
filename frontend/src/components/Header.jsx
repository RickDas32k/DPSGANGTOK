import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { schoolInfo } from '../mockData';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="text-red-600 font-bold text-2xl">DPS</div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{schoolInfo.name}</h1>
              <p className="text-xs md:text-sm text-gray-700">{schoolInfo.subtitle}</p>
              <p className="text-xs text-gray-600">{schoolInfo.affiliation}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">School Info</Link>
            <Link to="/academics" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Academics</Link>
            <Link to="/activities" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Activities</Link>
            <Link to="/admission" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Admission</Link>
            <Link to="/faculty" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Faculty</Link>
            <Link to="/facility" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Facility</Link>
            <Link to="/gallery" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Gallery</Link>
            <Link to="/contact" className="text-gray-800 hover:text-red-600 font-semibold transition-colors">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Home</Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">School Info</Link>
            <Link to="/academics" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Academics</Link>
            <Link to="/activities" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Activities</Link>
            <Link to="/admission" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Admission</Link>
            <Link to="/faculty" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Faculty</Link>
            <Link to="/facility" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Facility</Link>
            <Link to="/gallery" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Gallery</Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-red-600 font-semibold">Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
