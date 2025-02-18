'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LocaleSwitcher from './localeComponents/LocaleSwitcher';
import Image
 from 'next/image';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    return (
      <nav className="w-full  shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
  
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={100} height={60} className="cursor-pointer" ></Image>
          </Link>
  
          <div className="hidden md:flex space-x-6 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
            <LocaleSwitcher />
          </div>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
  
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white border-t p-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            
            <LocaleSwitcher />
          </div>
        )}
      </nav>
    );
}
