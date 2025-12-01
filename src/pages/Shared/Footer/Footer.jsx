import React from 'react';
import Logo from '../../../components/Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 rounded-2xl">
      <div className="max-w-4xl mx-auto text-center items-center">
        <div className="text-center mb-2">
          <div className="mx-auto w-fit">
            <Logo />
          </div>
        </div>
        {/* Tagline */}
        <p className="text-gray-300 mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm mb-10">
          <a href="#" className="hover:text-green-400 transition">Services</a>
          <a href="#" className="hover:text-green-400 transition">Coverage</a>
          <a href="#" className="hover:text-green-400 transition">About Us</a>
          <a href="#" className="hover:text-green-400 transition">Pricing</a>
          <a href="#" className="hover:text-green-400 transition">Blog</a>
          <a href="#" className="hover:text-green-400 transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-1 1.7-2.2 3.5-2.2 3.7 0 4.4 2.4 4.4 5.5V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
            </svg>
          </a>
          <a href="#" aria-label="Custom Icon" className="text-gray-400 hover:text-white transition">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center font-bold text-xs">X</div>
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.5s-.2-1.6-.8-2.3c-.8-.9-1.7-1-2.1-1.1C17.3 3 12 3 12 3h-.1s-5.3 0-8.6.1c-.4 0-1.3.2-2.1 1.1C.6 4.9.5 6.5.5 6.5S.3 8.4.3 10.3v3.4c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.3.2 7.3.2s5.3 0 8.6-.1c.4 0 1.3-.2 2.1-1.1.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-3.4c0-1.9-.2-3.8-.2-3.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
